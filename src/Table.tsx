import React from "react";
import locations from "./locations";
import { TrainAnnouncement } from "./App";

type TableProps = {
  announcements: Array<TrainAnnouncement>;
  now: Date;
};

export default function Table({ announcements }: TableProps) {
  return (
    <table>
      <caption>
        {announcements.length > 0 &&
          locations(announcements[0].LocationSignature)}
      </caption>
      <tbody>
        {announcements.map(announcement => {
          const id = announcement.AdvertisedTrainIdent;
          return <tr key={id} className={direction(id)}></tr>;
        })}
      </tbody>
    </table>
  );
}

function direction(id: string) {
  return /\d+[24680]$/.test(id) ? "northbound" : "southbound";
}
