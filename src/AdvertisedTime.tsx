import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";

export default function AdvertisedTime(props: {
  announcement: TrainAnnouncement;
}) {
  return <td className="advertised">{t(props.announcement)}</td>;
}

function t(announcement: TrainAnnouncement) {
  if (!announcement.TimeAtLocation) return "";
  return f(announcement.AdvertisedTimeAtLocation);
}

function f(advertised: string) {
  console.log(typeof advertised);
  const m = /\d\d\d\d-\d\d-\d\dT(\d\d:\d\d)(:\d\d)/.exec(advertised);
  if (!m) return advertised;
  if (m[2] === ":00") return m[1];
  return m[1] + m[2];
}
