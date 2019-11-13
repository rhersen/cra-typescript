import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";

export default function TrainId(props: { announcement: TrainAnnouncement }) {
  return <td className="id">{props.announcement.AdvertisedTrainIdent}</td>;
}
