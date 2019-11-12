import React from "react";
import "./App.css";
import locations from "./locations";

type MyState = {
  announcements: Array<{}>;
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
        <div>{this.state.msg}</div>
      </div>
    );
  }

  button(location: string) {
    return (
      <button
        onClick={async () => {
          const response = await fetch(
            `/.netlify/functions/node-fetch?location=${location}`
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
