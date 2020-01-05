import { differenceInSeconds, parseISO } from "date-fns";
import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";

export function DelayCell({
  announcement
}: {
  announcement: TrainAnnouncement;
}) {
  const diff: number = differenceInSeconds(
    parseISO(announcement.ModifiedTime),
    parseISO(announcement.AdvertisedTimeAtLocation)
  );
  const s: string = announcement.TimeAtLocation ? diff.toString() : "";
  return <td className="delay">{s}</td>;
}
