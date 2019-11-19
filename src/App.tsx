import React from "react";
import "./App.css";
import locations from "./locations";
import Table from "./Table";
import Response from "./Response";

let intervalId: NodeJS.Timeout;

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
  }

  render() {
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
          fetchTrain={async (id: string) => {
            const rsp = await fetch(
              `/.netlify/functions/announcements?train=${id}`
            );
            const json = await rsp.json();
            if (json.msg) this.setState({ msg: json.msg });
            if (json.TrainAnnouncement)
              this.setState({
                response: { announcements: json.TrainAnnouncement },
                msg: ""
              });
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
