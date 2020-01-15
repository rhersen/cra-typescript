import React from "react";
import "./App.css";
import Response from "./Response";
import * as grid from "./grid";
import TrainAnnouncement from "./TrainAnnouncement";
import Trains from "./Trains";

let eventSource: EventSource | null = null;

type MyState = {
  response: Response;
  msg: string;
  loaded: string | undefined;
  clicked: string | undefined;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    response: { announcements: [] },
    msg: "",
    loaded: undefined,
    clicked: undefined
  };

  componentWillUnmount() {
    if (eventSource) {
      eventSource.close();
      eventSource = null;
    }
  }

  getCurrent(direction: string) {
    return () => {
      this.setState({
        clicked: direction,
        loaded: undefined
      });

      fetch(`/.netlify/functions/announcements?direction=${direction}`)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            response: json.TrainAnnouncement,
            loaded: direction,
            clicked: undefined
          });
        });
    };
  }

  // eslint-disable-next-line complexity
  render() {
    return (
      <svg viewBox="-4 -6 8 12">
        <polygon
          className={
            this.state.loaded === "n"
              ? "loaded"
              : this.state.clicked === "n"
              ? "clicked"
              : "idle"
          }
          points={grid.leftTriangle()}
          stroke="#005CFF"
          fill="#f5f5f5"
          onClick={this.getCurrent("n")}
        />
        <polygon
          className={
            this.state.loaded === "s"
              ? "loaded"
              : this.state.clicked === "s"
              ? "clicked"
              : "idle"
          }
          points={grid.rightTriangle()}
          stroke="#005CFF"
          fill="#f5f5f5"
          onClick={this.getCurrent("s")}
        />
        {this.state.response && (
          <g>
            <text className="timestamp" textAnchor="middle" x="-1.5" y="-0.5">
              hello
            </text>
            <Trains response={this.state.response} />
          </g>
        )}
      </svg>
    );
  }

  setAnnouncements(announcements: TrainAnnouncement[]) {
    if (announcements)
      this.setState({
        response: { announcements },
        msg: ""
      });
  }
}
