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
          const id = announcement.AdvertisedTrainIdent;
          return (
            <StationRow
              key={id}
              id={id}
              onClick={() => props.fetchTrain(id)}
              announcement={announcement}
              now={props.now}
            />
          );
        })}
      </tbody>
    </table>
  );
}
