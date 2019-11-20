import React from "react";
import TrainAnnouncement, { countdown } from "./TrainAnnouncement";

export default function Countdown(props: {
  announcement: TrainAnnouncement;
  now: Date;
}) {
  return (
    <td className="countdown">{countdown(props.announcement, props.now)}</td>
  );
}
