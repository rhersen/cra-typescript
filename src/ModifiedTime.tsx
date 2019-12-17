import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";

export default function Time(props: { announcement: TrainAnnouncement }) {
  return <td className="modified">{time(props.announcement)}</td>;
}

function time(announcement: TrainAnnouncement) {
  const s = announcement.ModifiedTime;
  return s[10] === "T" ? s.substr(14, 9) : s;
}
