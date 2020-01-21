import React from "react";
import "./App.css";
import * as grid from "./grid";
import TrainAnnouncement from "./TrainAnnouncement";
import Trains from "./Trains";

let eventSource: EventSource | null = null;

type MyState = {
  response: TrainAnnouncement[];
  msg: string;
  loaded: string | undefined;
  clicked: string | undefined;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    response: [],
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
          const response = json.TrainAnnouncement;
          this.setState({
            response,
            loaded: direction,
            clicked: undefined
          });
        });
    };
  }

  render() {
    return (
      <svg viewBox="-4 -6 8 12">
        <polygon
          className={this.arrowClass("n")}
          points={grid.leftTriangle()}
          stroke="#005CFF"
          fill="#f5f5f5"
          onClick={this.getCurrent("n")}
        />
        <polygon
          className={this.arrowClass("s")}
          points={grid.rightTriangle()}
          stroke="#005CFF"
          fill="#f5f5f5"
          onClick={this.getCurrent("s")}
        />
        {this.state.response && (
          <g>
            <Trains response={this.state.response} />
          </g>
        )}
      </svg>
    );
  }

  private arrowClass(direction: string) {
    return this.state.loaded === direction
      ? "loaded"
      : this.state.clicked === direction
      ? "clicked"
      : "idle";
  }

  setAnnouncements(announcements: TrainAnnouncement[]) {
    if (announcements)
      this.setState({
        response: announcements,
        msg: ""
      });
  }
}
