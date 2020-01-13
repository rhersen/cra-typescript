import React from "react";
import { TableProps } from "./TableProps";
import TrainRow from "./TrainRow";

export default function Table(props: TableProps) {
  const { response, now } = props;
  return (
    <table>
      <tbody>
        {response.announcements.map(a => {
          return (
            <TrainRow
              key={
                a.AdvertisedTrainIdent + a.ActivityType + a.LocationSignature
              }
              announcement={a}
              now={now}
            />
          );
        })}
      </tbody>
    </table>
  );
}
