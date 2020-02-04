import React from "react";
import { formatISO, sub } from "date-fns";
import "./App.css";
import * as grid from "./grid";
import TrainAnnouncement from "./TrainAnnouncement";
import Trains from "./Trains";

type MyState = {
  response: TrainAnnouncement[];
  msg: string;
  loaded: string;
  clicked: string;
  eventSource: EventSource | null;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    response: [],
    msg: "",
    loaded: "",
    clicked: "",
    eventSource: null
  };

  componentWillUnmount() {
    if (this.state.eventSource) {
      this.state.eventSource.close();
      this.setState({ eventSource: null });
    }
  }

  getCurrent(direction: string) {
    return () => {
      this.setState({
        clicked: direction,
        loaded: ""
      });

      const since = formatISO(sub(new Date(), { minutes: 12 })).substr(0, 19);

      fetch(
        `/.netlify/functions/announcements?direction=${direction}&since=${since}`
      )
        .then(response => response.json())
        .then(json => {
          const response: TrainAnnouncement[] = json.TrainAnnouncement;
          this.setState({
            response,
            loaded: direction,
            clicked: ""
          });

          if (json.INFO) {
            if (this.state.eventSource) this.state.eventSource.close();
            this.setState({
              eventSource: this.getEventSource(json.INFO.SSEURL)
            });
          }
        });
    };
  }

  private getEventSource(sseUrl: string): EventSource {
    const eventSource = new EventSource(sseUrl);
    eventSource.onmessage = event => {
      const parsed = JSON.parse(event.data);
      const trainAnnouncements = parsed.RESPONSE.RESULT[0].TrainAnnouncement;
      this.setState((oldState: MyState) => {
        return {
          response: oldState.response.concat(trainAnnouncements)
        };
      });
    };
    return eventSource;
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
        {this.state.eventSource ? (
          <polygon
            points={grid.square()}
            stroke="#005CFF"
            fill="#f00"
            onClick={() => {
              if (this.state.eventSource) {
                this.state.eventSource.close();
                this.setState({ eventSource: null });
              }
            }}
          />
        ) : (
          undefined
        )}
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
}
