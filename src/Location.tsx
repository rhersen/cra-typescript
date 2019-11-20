import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";
import locations from "./locations";

export default function Location(props: { announcement: TrainAnnouncement }) {
  return <td className="destination">{locations(props.announcement.LocationSignature)}</td>;
}
