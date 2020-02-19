import React from "react";
import { differenceInSeconds, formatISO, sub } from "date-fns";
import "./App.css";
import TrainAnnouncement from "./TrainAnnouncement";
import _ from "lodash";
import currentTrains from "./currentTrains";
import Branch from "./Branch";
import branchDivider from "./branchDivider";

type MyState = {
  response: TrainAnnouncement[];
  msg: string;
  loaded: string;
  clicked: string;
  eventSource: EventSource | null;
  eventSourceStarted: Date | null;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    response: [],
    msg: "",
    loaded: "",
    clicked: "",
    eventSource: null,
    eventSourceStarted: null
  };

  componentWillUnmount() {
    if (this.state.eventSource) {
      this.state.eventSource.close();
      this.setState({ eventSource: null, eventSourceStarted: null });
    }
  }

  getCurrent(direction: string) {
    return () => {
      this.setState({
        clicked: direction,
        loaded: ""
      });

      const since = formatISO(sub(new Date(), { minutes: 8 })).substr(0, 19);

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
              eventSource: this.getEventSource(json.INFO.SSEURL),
              eventSourceStarted: new Date()
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
        const response = oldState.response.concat(trainAnnouncements);
        const age = differenceInSeconds(
          new Date(),
          oldState.eventSourceStarted || new Date(0)
        );
        if (age > 600 && this.state.eventSource) {
          this.state.eventSource.close();
          return {
            response,
            eventSource: null,
            eventSourceStarted: null
          } as MyState;
        }
        return { response } as MyState;
      });
    };
    return eventSource;
  }

  render() {
    const grouped = _.groupBy(
      currentTrains(this.state.response),
      branchDivider
    );

    return (
      <div>
        <Branch key={"nw"} trains={grouped.nw} size="normal" />
        <Branch key={"ne"} trains={grouped.ne} size="normal" />
        <div className="mid-row">
          <span
            className={`${this.arrowClass("n")} arrow-up`}
            onClick={this.getCurrent("n")}
          />
          <Branch key={"c"} trains={grouped.c} size="normal" />
          <div className="right-col">
            <span
              className={`${this.arrowClass("s")} arrow-down`}
              onClick={this.getCurrent("s")}
            />
            {this.state.eventSource ? (
              <span
                className="stop"
                onClick={() => {
                  if (this.state.eventSource) {
                    this.state.eventSource.close();
                    this.setState({
                      eventSource: null,
                      eventSourceStarted: null
                    });
                  }
                }}
              >
                STOP
              </span>
            ) : null}
          </div>
        </div>
        <Branch key={"sw"} trains={grouped.sw} size="normal" />
        <Branch key={"se"} trains={grouped.se} size="normal" />
      </div>
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
