import React from "react";
import "./App.css";
import locations from "./locations";
import Table from "./Table";
import TrainAnnouncement from "./TrainAnnouncement";

type MyState = {
  announcements: Array<TrainAnnouncement>;
  msg: string;
  now: Date;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    announcements: [],
    msg: "",
    now: new Date()
  };

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
        <Table announcements={announcements} now={now} />
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
            this.setState({ announcements: json.TrainAnnouncement, msg: "" });
        }}
      >
        {locations(location)}
      </button>
    );
  }
}
