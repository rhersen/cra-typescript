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
import TrainAnnouncement from "./TrainAnnouncement";

export default function Table(props: {
  announcements: Array<TrainAnnouncement>;
  now: Date;
  fetchTrain: (id: string) => void;
}) {
  return (
    <table>
      <caption>
        {props.announcements.length > 0 &&
          locations(props.announcements[0].LocationSignature)}
      </caption>
      <tbody>
        {props.announcements.map(announcement => {
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

function direction(id: string) {
  return /\d+[24680]$/.test(id) ? "northbound" : "southbound";
}
