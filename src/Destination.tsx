import React from "react";
import TrainAnnouncement from "./TrainAnnouncement";
import locations from "./locations";

export default function Destination(props: { announcement: TrainAnnouncement }) {
  return (
      <td className="destination">
      <span className="from">
        {props.announcement.FromLocation &&
        props.announcement.FromLocation.map(location =>
            locations(location.LocationName)
        ).join()}
        –
      </span>
        {props.announcement.ToLocation &&
        props.announcement.ToLocation.map(location =>
            locations(location.LocationName)
        ).join()}
      </td>
  )

}
