import TrainAnnouncement from "./TrainAnnouncement";
import TrainIdCell from "./TrainIdCell";
import TrackCell from "./TrackCell";
import ShortCell from "./ShortCell";
import LocationCell from "./LocationCell";
import AdvertisedTimeCell from "./AdvertisedTimeCell";
import ModifiedTime from "./ModifiedTimeCell";
import TimeCell from "./TimeCell";
import CountdownCell from "./CountdownCell";
import DeviationCell from "./DeviationCell";
import React from "react";

export default function TrainRow(props: {
  onClick: () => void;
  announcement: TrainAnnouncement;
  now: Date;
}) {
  return (
    <tr className="train" onClick={props.onClick}>
      <TrainIdCell announcement={props.announcement} />
      <TrackCell announcement={props.announcement} />
      <ShortCell announcement={props.announcement} />
      <LocationCell announcement={props.announcement} />
      <AdvertisedTimeCell announcement={props.announcement} />
      <TimeCell announcement={props.announcement} />
      <ModifiedTime announcement={props.announcement} />
      <CountdownCell announcement={props.announcement} now={props.now} />
      <DeviationCell announcement={props.announcement} />
    </tr>
  );
}
