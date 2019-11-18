import React from "react";
import { format, parseISO } from "date-fns";
import TrainAnnouncement from "./TrainAnnouncement";

export default function AdvertisedTime(props: {
  announcement: TrainAnnouncement;
}) {
  return <td className="advertised">{time(props.announcement)}</td>;
}

function time(announcement: TrainAnnouncement) {
  if (!announcement.TimeAtLocation) return "";
  else return hmm(announcement.AdvertisedTimeAtLocation);
}

function hmm(advertised: string) {
  const parsed = parseISO(advertised);
  return format(parsed, parsed.getSeconds() ? "h:mm:ss" : "h:mm");
}
