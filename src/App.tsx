import React from "react";
import "./App.css";
import Table from "./Table";
import Response from "./Response";
import { formatISO, sub } from "date-fns";
import TrainAnnouncement, { key } from "./TrainAnnouncement";

let eventSource: EventSource | null = null;

type MyState = {
  response: Response;
  msg: string;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    response: { announcements: [] },
    msg: ""
  };

  componentWillUnmount() {
    if (eventSource) {
      eventSource.close();
      eventSource = null;
    }
  }

  render() {
    const { msg, response } = this.state;

    return (
      <div>
        {this.button()}
        <div>{msg}</div>
        <Table response={response} now={new Date()} />
      </div>
    );
  }

  setAnnouncements(announcements: TrainAnnouncement[]) {
    if (announcements)
      this.setState({
        response: { announcements },
        msg: ""
      });
  }

  button() {
    const stateUpdater = (newAnnouncement: TrainAnnouncement) => ({
      response
    }: MyState) => {
      const newKey = key(newAnnouncement);
      const found = response.announcements.findIndex(
        oldAnnouncement => key(oldAnnouncement) === newKey
      );
      const announcements: TrainAnnouncement[] =
        found === -1
          ? [...response.announcements, newAnnouncement]
          : [
              ...response.announcements.slice(0, found),
              newAnnouncement,
              ...response.announcements.slice(found + 1)
            ];

      if (response.announcements.length > 32)
        return { response: { announcements: announcements.slice(1) } };

      return { response: { announcements } };
    };

    return (
      <button
        onClick={async () => {
          const rsp = await fetch(
            `/.netlify/functions/announcements?since=${formatISO(
              sub(new Date(), { minutes: 1 })
            ).substr(0, 19)}`
          );
          const json = await rsp.json();
          if (json.msg) this.setState({ msg: json.msg });
          this.setAnnouncements(json.TrainAnnouncement);

          if (json.INFO) {
            if (eventSource) eventSource.close();
            eventSource = new EventSource(json.INFO.SSEURL);
            eventSource.onmessage = event => {
              this.setState(stateUpdater(getAnnouncements(event.data)));
            };
          }

          function getAnnouncements(data: string): TrainAnnouncement {
            return JSON.parse(data).RESPONSE.RESULT[0].TrainAnnouncement[0];
          }
        }}
      >
        fetch
      </button>
    );
  }
}
