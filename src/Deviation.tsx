import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";

export default function Deviation(props: { announcement: TrainAnnouncement }) {
  return <td className="deviation">{text(props.announcement.Deviation)}</td>;
}

function text(a: string[]) {
  if (a) return a.filter(s => !/Kort/.test(s)).map(c => <div key={c}>{c}</div>);
}
