import React from "react";
import "./App.css";
import Table from "./Table";
import Response from "./Response";
import { formatISO, sub } from "date-fns";
import TrainAnnouncement, { key } from "./TrainAnnouncement";

let intervalId: NodeJS.Timeout;
let eventSource: EventSource | null = null;

type MyState = {
  response: Response;
  msg: string;
  now: Date;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    response: { announcements: [] },
    msg: "",
    now: new Date()
  };

  componentDidMount() {
    intervalId = setInterval(() => this.setState({ now: new Date() }), 990);
  }

  componentWillUnmount() {
    clearInterval(intervalId);
    if (eventSource) {
      eventSource.close();
      eventSource = null;
    }
  }

  render() {
    const { msg, response, now } = this.state;

    return (
      <div>
        {this.button()}
        <div>{msg}</div>
        <Table response={response} now={now} />
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
