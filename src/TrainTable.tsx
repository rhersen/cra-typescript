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
          const id = announcement.LocationSignature;
          return (
            <TrainRow
              key={id}
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
