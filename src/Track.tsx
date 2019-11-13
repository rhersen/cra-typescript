import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";

export default function Track(props: { announcement: TrainAnnouncement }) {
  return <td className="track">{props.announcement.TrackAtLocation}</td>;
}
