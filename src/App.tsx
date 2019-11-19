import React from "react";
import "./App.css";
import locations from "./locations";
import Table from "./Table";
import TrainAnnouncements from "./TrainAnnouncements";

let intervalId: NodeJS.Timeout;

type MyState = {
  announcements: TrainAnnouncements;
  msg: string;
  now: Date;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    announcements: { announcements: [] },
    msg: "",
    now: new Date()
  };

  componentDidMount() {
    console.log("componentDidMount");
    intervalId = setInterval(() => this.setState({ now: new Date() }), 990);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(intervalId);
  }

  render() {
    const { msg, announcements, now } = this.state;
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
          announcements={announcements}
          now={now}
          fetchTrain={async (id: string) => {
            const response = await fetch(
              `/.netlify/functions/announcements?train=${id}`
            );
            const json = await response.json();
            if (json.msg) this.setState({ msg: json.msg });
            if (json.TrainAnnouncement)
              this.setState({
                announcements: { announcements: json.TrainAnnouncement },
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
              announcements: { announcements: json.TrainAnnouncement },
              msg: ""
            });
        }}
      >
        {locations(location)}
      </button>
    );
  }
}
