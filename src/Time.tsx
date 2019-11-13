import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";

export default function Time(props: { announcement: TrainAnnouncement }) {
  return <td className="time">{t(props.announcement)}</td>;
}

function t(announcement: TrainAnnouncement) {
  if (announcement.TimeAtLocation)
    return <b>{f(announcement.TimeAtLocation)}</b>;
  if (announcement.EstimatedTimeAtLocation)
    return <i>{f(announcement.EstimatedTimeAtLocation)}</i>;
  return f(announcement.AdvertisedTimeAtLocation);
}

function f(advertised: string) {
  const m = /\d\d\d\d-\d\d-\d\dT(\d\d:\d\d)(:\d\d)/.exec(advertised);
  if (!m) return advertised;
  if (m[2] === ":00") return m[1];
  return m[1] + m[2];
}
