import { TableProps } from "./TableProps";
import TrainAnnouncement from "./TrainAnnouncement";
import StationRow from "./StationRow";
import { stationName } from "./Response";
import React from "react";

export default function StationTable(props: TableProps) {
  return (
    <table>
      <caption>{stationName(props.response)}</caption>
      <tbody>
        {props.response.announcements.map((announcement: TrainAnnouncement) => {
          const trainId = announcement.AdvertisedTrainIdent;
          return (
            <StationRow
              key={trainId}
              onClick={() => props.fetch({ trainId })}
              announcement={announcement}
              now={props.now}
            />
          );
        })}
      </tbody>
    </table>
  );
}
