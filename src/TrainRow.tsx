import TrainAnnouncement from "./TrainAnnouncement";
import TrainIdCell from "./TrainIdCell";
import TrackCell from "./TrackCell";
import ShortCell from "./ShortCell";
import LocationCell from "./LocationCell";
import AdvertisedTimeCell from "./AdvertisedTimeCell";
import TimeCell from "./TimeCell";
import CountdownCell from "./CountdownCell";
import DeviationCell from "./DeviationCell";
import React from "react";
import { DelayCell } from "./DelayCell";
import DestinationCell from "./DestinationCell";

export default function TrainRow(props: {
  announcement: TrainAnnouncement;
  now: Date;
}) {
  return (
    <tr className="train">
      <TrainIdCell announcement={props.announcement} />
      <DestinationCell announcement={props.announcement} />
      <td>{props.announcement.ActivityType}</td>
      <TrackCell announcement={props.announcement} />
      <ShortCell announcement={props.announcement} />
      <LocationCell announcement={props.announcement} />
      <AdvertisedTimeCell announcement={props.announcement} />
      <TimeCell announcement={props.announcement} />
      <DelayCell announcement={props.announcement} />
      <CountdownCell announcement={props.announcement} now={props.now} />
      <DeviationCell announcement={props.announcement} />
    </tr>
  );
}
