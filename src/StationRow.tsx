import TrainAnnouncement, {directionClass} from "./TrainAnnouncement";
import TrainIdCell from "./TrainIdCell";
import TrackCell from "./TrackCell";
import ShortCell from "./ShortCell";
import DestinationCell from "./DestinationCell";
import AdvertisedTimeCell from "./AdvertisedTimeCell";
import TimeCell from "./TimeCell";
import ModifiedTimeCell from "./ModifiedTimeCell";
import CountdownCell from "./CountdownCell";
import DeviationCell from "./DeviationCell";
import React from "react";

export default function StationRow({
  announcement,
  onClick,
  now
}: {
  onClick: () => void;
  announcement: TrainAnnouncement;
  now: Date;
}) {
  return (
    <tr className={`station ${directionClass(announcement)}`} onClick={onClick}>
      <TrainIdCell announcement={announcement} />
      <TrackCell announcement={announcement} />
      <ShortCell announcement={announcement} />
      <DestinationCell announcement={announcement} />
      <AdvertisedTimeCell announcement={announcement} />
      <TimeCell announcement={announcement} />
      <ModifiedTimeCell announcement={announcement} />
      <CountdownCell announcement={announcement} now={now} />
      <DeviationCell announcement={announcement} />
    </tr>
  );
}
