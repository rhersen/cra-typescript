import React from "react";
import TrainId from "./TrainId";
import Track from "./Track";
import Short from "./Short";
import Destination from "./Destination";
import AdvertisedTime from "./AdvertisedTime";
import Time from "./Time";
import Countdown from "./Countdown";
import Deviation from "./Deviation";
import locations from "./locations";
import Response from "./Response";
import Location from "./Location";

export default function Table(props: {
  response: Response;
  now: Date;
  fetchTrain: (id: string) => void;
}) {
  const count = stationCount(props.response);
  return count === 1 ? renderStation() : count > 1 ? renderTrain() : null;

  function renderStation() {
    return (
      <table>
      <caption>{stationName(props.response)}</caption>
        <tbody>
          {props.response.announcements.map(announcement => {
            const id = announcement.AdvertisedTrainIdent;
            return (
              <tr
                key={id}
                className={direction(id)}
                onClick={() => props.fetchTrain(id)}
              >
                <TrainId announcement={announcement} />
                <Track announcement={announcement} />
                <Short announcement={announcement} />
                <Destination announcement={announcement} />
                <AdvertisedTime announcement={announcement} />
                <Time announcement={announcement} />
                <Countdown announcement={announcement} now={props.now} />
                <Deviation announcement={announcement} />
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  function renderTrain() {
    return (
      <table>
        <caption>
          train {props.response.announcements[0].AdvertisedTrainIdent}
        </caption>
        <tbody>
          {props.response.announcements.map(announcement => {
            const id = announcement.AdvertisedTrainIdent;
            return (
              <tr
                key={id}
                className={direction(id)}
                onClick={() => props.fetchTrain(id)}
              >
                <TrainId announcement={announcement} />
                <Track announcement={announcement} />
                <Short announcement={announcement} />
                <Location announcement={announcement} />
                <AdvertisedTime announcement={announcement} />
                <Time announcement={announcement} />
                <Countdown announcement={announcement} now={props.now} />
                <Deviation announcement={announcement} />
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

function stationCount(response: Response): number {
  if (!response.announcements) return 0;

  const signatures: { [key: string]: Boolean } = {};
  response.announcements.forEach(
    announcement => (signatures[announcement.LocationSignature] = true)
  );

  return Object.keys(signatures).length;
}

function stationName(response: Response) {
  return (
    response.announcements &&
    response.announcements.length > 0 &&
    locations(response.announcements[0].LocationSignature)
  );
}

function direction(id: string) {
  return /\d+[24680]$/.test(id) ? "northbound" : "southbound";
}
