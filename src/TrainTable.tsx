import { TableProps } from "./TableProps";
import TrainRow from "./TrainRow";
import React from "react";

export default function TrainTable(props: TableProps) {
  return (
    <table>
      <caption>
        train {props.response.announcements[0].AdvertisedTrainIdent}
      </caption>
      <tbody>
        {props.response.announcements.map(announcement => {
          const location = announcement.LocationSignature;
          return (
            <TrainRow
              key={location}
              onClick={() => props.fetchStation(location)}
              announcement={announcement}
              now={props.now}
            />
          );
        })}
      </tbody>
    </table>
  );
}
