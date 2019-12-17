import TrainAnnouncement, {directionClass} from "./TrainAnnouncement";
import TrainId from "./TrainId";
import Track from "./Track";
import Short from "./Short";
import Destination from "./Destination";
import AdvertisedTime from "./AdvertisedTime";
import Time from "./Time";
import ModifiedTime from "./ModifiedTime";
import Countdown from "./Countdown";
import Deviation from "./Deviation";
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
      <TrainId announcement={announcement} />
      <Track announcement={announcement} />
      <Short announcement={announcement} />
      <Destination announcement={announcement} />
      <AdvertisedTime announcement={announcement} />
      <Time announcement={announcement} />
      <ModifiedTime announcement={announcement} />
      <Countdown announcement={announcement} now={now} />
      <Deviation announcement={announcement} />
    </tr>
  );
}
