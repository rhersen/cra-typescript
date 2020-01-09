import React from "react";
import "./App.css";
import locations from "./locations";
import Table from "./Table";
import Response from "./Response";
import { SearchParams } from "./SearchParams";
import { add, formatISO, sub } from "date-fns";
import TrainAnnouncement from "./TrainAnnouncement";

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
    const since = formatISO(sub(new Date(), { hours: 2 })).substr(0, 19);
    const until = formatISO(add(new Date(), { hours: 2 })).substr(0, 19);
    const { msg, response, now } = this.state;
    return (
      <div>
        {this.button("Sub")}
        {this.button("Sod")}
        {this.button("Sci")}
        {this.button("Sst")}
        {this.button("Åbe")}
        {this.button("Äs")}
        {this.button("Sta")}
        {this.button("Hu")}
        {this.button("Flb")}
        {this.button("Tul")}
        {this.button("Tu")}
        <div>{msg}</div>
        <Table
          response={response}
          now={now}
          fetch={async (params: SearchParams) => {
            let queryString: string;
            if (params.location) {
              queryString = `?location=${params.location}`;
            } else {
              queryString = `?train=${params.trainId}`;
            }
            const rsp = await fetch(
              `/.netlify/functions/announcements${queryString}&since=${since}&until=${until}`
            );
            const json = await rsp.json();
            if (json.msg) this.setState({ msg: json.msg });
            if (json.TrainAnnouncement)
              this.setState({
                response: { announcements: json.TrainAnnouncement },
                msg: ""
              });
            if (json.INFO) {
              if (eventSource) eventSource.close();
              eventSource = new EventSource(json.INFO.SSEURL);
              eventSource.onmessage = event => {
                const parsed = JSON.parse(event.data);
                const [body] = parsed.RESPONSE.RESULT;
                const newAnnouncements: TrainAnnouncement[] =
                  body.TrainAnnouncement;
                console.log(newAnnouncements.length, "new announcements");
                const [newAnnouncement] = newAnnouncements;
                this.setState(oldState => {
                  const { announcements } = oldState.response;
                  const found = announcements.findIndex(
                    announcement =>
                      announcement.LocationSignature ===
                      newAnnouncement.LocationSignature
                  );
                  if (found === -1) {
                    return { response: { announcements } };
                  } else {
                    return {
                      response: {
                        announcements: [
                          ...announcements.slice(0, found),
                          newAnnouncement,
                          ...announcements.slice(found + 1)
                        ]
                      }
                    };
                  }
                });
              };
            }
          }}
        />
      </div>
    );
  }

  button(location: string) {
    return (
      <button
        onClick={async () => {
          const response = await fetch(
            `/.netlify/functions/announcements?location=${location}`
          );
          const json = await response.json();
          if (json.msg) this.setState({ msg: json.msg });
          if (json.TrainAnnouncement)
            this.setState({
              response: { announcements: json.TrainAnnouncement },
              msg: ""
            });
        }}
      >
        {locations(location)}
      </button>
    );
  }
}
