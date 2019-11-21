import TrainAnnouncement from "./TrainAnnouncement";
import TrainId from "./TrainId";
import Track from "./Track";
import Short from "./Short";
import Destination from "./Destination";
import AdvertisedTime from "./AdvertisedTime";
import Time from "./Time";
import Countdown from "./Countdown";
import Deviation from "./Deviation";
import React from "react";

export default function StationRow(props: {
  id: string;
  onClick: () => void;
  announcement: TrainAnnouncement;
  now: Date;
}) {
  return (
    <tr
      className={`station ${/\d+[24680]$/.test(props.id) ? "northbound" : "southbound"}`}
      onClick={props.onClick}
    >
      <TrainId announcement={props.announcement} />
      <Track announcement={props.announcement} />
      <Short announcement={props.announcement} />
      <Destination announcement={props.announcement} />
      <AdvertisedTime announcement={props.announcement} />
      <Time announcement={props.announcement} />
      <Countdown announcement={props.announcement} now={props.now} />
      <Deviation announcement={props.announcement} />
    </tr>
  );
}
