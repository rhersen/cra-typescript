import _ from "lodash";
import React from "react";
import { addDays, endOfDay, formatISO } from "date-fns";
import "./App.css";
import TrainAnnouncement from "./TrainAnnouncement";
import locations from "./locations";

let eventSource: EventSource | null = null;

type MyState = {
  response: TrainAnnouncement[];
  clicked: string;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    response: [],
    clicked: ""
  };

  componentWillUnmount() {
    if (eventSource) {
      eventSource.close();
      eventSource = null;
    }
  }

  getCurrent(trainId: string) {
    return (ev: any) => {
      if (ev.key && ev.key !== "Enter") return;

      const until = formatISO(endOfDay(addDays(new Date(), 1))).substr(0, 19);

      fetch(
        `/.netlify/functions/announcements?trainId=${trainId}&until=${until}`
      )
        .then(response => response.json())
        .then(json => {
          const response = json.TrainAnnouncement;

          if (json.INFO) {
            if (eventSource) eventSource.close();
            eventSource = new EventSource(json.INFO.SSEURL);
            eventSource.onmessage = event => {
              const parsed = JSON.parse(event.data);
              this.setState(({ response }: MyState) => ({
                response: response.concat(
                  parsed.RESPONSE.RESULT[0].TrainAnnouncement
                )
              }));
            };
          }

          this.setState({
            response,
            clicked: ""
          });
        });
    };
  }

  render() {
    const sorted: TrainAnnouncement[] = _.orderBy(
      this.state.response,
      "AdvertisedTimeAtLocation"
    );

    const rowKeys: string[] = _.uniq(_.map(sorted, activityAndLocation));
    const colKeys: string[] = _.uniq(_.map(sorted, date));
    const cells: {
      [key: string]: TrainAnnouncement;
    } = _.keyBy(
      sorted,
      (a: TrainAnnouncement): string => activityAndLocation(a) + date(a)
    );

    return (
      <div>
        <input
          type="text"
          value={this.state.clicked}
          onChange={(event: any) => {
            this.setState({ clicked: event.target.value });
          }}
          onKeyPress={this.getCurrent(this.state.clicked)}
        />
        <span onClick={this.getCurrent(this.state.clicked)}>submit</span>
        <table>
          <tbody>
            <tr>
              <th>location</th>
              {_.map(colKeys, colKey => {
                return (
                  <React.Fragment key={colKey}>
                    <th />
                    <th>{colKey.substr(8)}</th>
                  </React.Fragment>
                );
              })}
            </tr>
            {_.map(rowKeys, rowKey => {
              const strings = rowKey.split(":");
              return (
                <tr key={rowKey}>
                  <td>
                    {strings[0] === "Avgang" ? "" : strings[0]}{" "}
                    {locations(strings[1]).AdvertisedShortLocationName}
                  </td>
                  {_.map(colKeys, colKey => {
                    const cell = cells[rowKey + colKey];
                    if (!cell)
                      return (
                        <React.Fragment key={colKey}>
                          <td />
                          <td />
                        </React.Fragment>
                      );
                    const t = cell.TimeAtLocationWithSeconds;
                    const a = cell.AdvertisedTimeAtLocation;
                    return (
                      <React.Fragment key={colKey}>
                        <td>{t ? t.substr(11, 8) : "-"}</td>
                        <td>{a ? a.substr(11, 5) : "-"}</td>
                      </React.Fragment>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function activityAndLocation(a: TrainAnnouncement): string {
  return `${a.ActivityType}:${a.LocationSignature}`;
}

function date(a: TrainAnnouncement): string {
  return a.AdvertisedTimeAtLocation.substr(0, 10);
}
