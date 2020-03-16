import React from "react";
import { formatISO, add, sub } from "date-fns";
import "./App.css";
import TrainAnnouncement from "./TrainAnnouncement";
import location from "./location";
import Nav from "./Nav";
import Sheet from "./Sheet";

type MyState = {
  announcements: TrainAnnouncement[];
  msg: string;
  direction: string;
  branch: string;
  then: number | null;
  eventSource: EventSource | null;
  eventSourceStarted: Date | null;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    announcements: [],
    msg: "",
    direction: "",
    branch: "",
    then: null,
    eventSource: null,
    eventSourceStarted: null
  };

  componentWillUnmount() {
    if (this.state.eventSource) {
      this.state.eventSource.close();
      this.setState({ eventSource: null, eventSourceStarted: null });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.msg && <div>{this.state.msg}</div>}
        <Nav
          getTrains={async ({
            branch,
            direction
          }: {
            branch: string;
            direction: string;
          }): Promise<void> => {
            await this.getTrains(branch, direction);
          }}
        />
        <Sheet
          announcements={this.state.announcements}
          locations={
            this.state.direction !== "n" && this.state.branch
              ? location[this.state.branch].slice().reverse()
              : location[this.state.branch]
          }
        />
      </div>
    );
  }

  getTrains(branch: string, direction: string) {
    this.clearAnnouncements(branch, direction);
    const since = formatISO(sub(new Date(), { minutes: 90 })).substr(0, 19);
    const until = formatISO(add(new Date(), { minutes: 75 })).substr(0, 19);

    fetch(
      `/.netlify/functions/announcements?direction=${direction}&locations=${location[branch]}&since=${since}&until=${until}`
    )
      .then(response => response.json())
      .then(json => {
        this.setAnnouncements(json);
        /*
        if (json.INFO) {
          if (this.state.eventSource) this.state.eventSource.close();
          this.setState({
            eventSource: this.getEventSource(json.INFO.SSEURL),
            eventSourceStarted: new Date()
          });
        }
*/
      });
  }

  setAnnouncements(json: { TrainAnnouncement: TrainAnnouncement[] }) {
    this.setState({
      announcements: json.TrainAnnouncement,
      msg: "",
      then: Date.now()
    });
  }

  clearAnnouncements(branch: string, direction: string) {
    this.setState({
      branch,
      direction,
      announcements: [],
      then: null
    });
  }
}
