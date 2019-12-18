import React from "react";
import TrainAnnouncement, {fromLocation} from "./TrainAnnouncement";
import locations from "./locations";

export default function DestinationCell({
  announcement
}: {
  announcement: TrainAnnouncement;
}) {
  return (
    <td className="destination">
      <span className="from">
        {fromLocation(announcement)}
        –
      </span>
      {announcement.ToLocation &&
        announcement.ToLocation.map(location =>
          locations(location.LocationName)
        ).join()}
    </td>
  );
}
