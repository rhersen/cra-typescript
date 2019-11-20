import React from "react";
import TrainAnnouncement, { time } from "./TrainAnnouncement";

export default function AdvertisedTime(props: {
  announcement: TrainAnnouncement;
}) {
  return <td className="advertised">{time(props.announcement)}</td>;
}
