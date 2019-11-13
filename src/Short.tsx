import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";

export default function Short(props: { announcement: TrainAnnouncement }) {
  return <td className="short">{text(props.announcement.Deviation)}</td>;
}

function text(a: string[]) {
  return (
    a &&
    a.map(s => {
      if (/Kort/.test(s)) return "K";
      if (s.length) return "*";
      return s;
    })
  );
}
