import React from "react";
import { format, parseISO } from "date-fns";
import TrainAnnouncement from "./TrainAnnouncement";

export default function Time(props: { announcement: TrainAnnouncement }) {
  return <td className="time">{time(props.announcement)}</td>;
}

function time(announcement: TrainAnnouncement) {
  if (announcement.TimeAtLocation)
    return <b>{hmm(announcement.TimeAtLocation)}</b>;
  if (announcement.EstimatedTimeAtLocation)
    return <i>{hmm(announcement.EstimatedTimeAtLocation)}</i>;
  return hmm(announcement.AdvertisedTimeAtLocation);
}

function hmm(advertised: string) {
  const parsed = parseISO(advertised);
  return format(parsed, parsed.getSeconds() ? "H:mm:ss" : "H:mm");
}
