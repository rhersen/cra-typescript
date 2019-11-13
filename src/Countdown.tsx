import React from "react";
import { addSeconds, differenceInSeconds, format, parseISO } from "date-fns";
import TrainAnnouncement from "./TrainAnnouncement";

export default function Countdown(props: {
  announcement: TrainAnnouncement;
  now: Date;
}) {
  return (
    <td className="countdown">{countdown(props.now, props.announcement)}</td>
  );
}

// eslint-disable-next-line complexity
function countdown(now: Date, announcement: TrainAnnouncement) {
  if (!now) return "";

  const dateLeft: string =
    announcement.EstimatedTimeAtLocation ||
    announcement.AdvertisedTimeAtLocation;
  const seconds = differenceInSeconds(parseISO(dateLeft), now);

  if (seconds <= -100) return "";
  if (seconds >= 600)
    return `${format(addSeconds(new Date(0), seconds), "m")}min`;
  if (seconds >= 100) return format(addSeconds(new Date(0), seconds), "m:ss");
  return `${seconds}s`;
}
