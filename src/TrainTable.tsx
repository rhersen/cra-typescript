import React from "react";
import { trainIdent } from "./Response";
import { TableProps } from "./TableProps";
import TrainRow from "./TrainRow";

export default function TrainTable(props: TableProps) {
  const { response, now, fetch } = props;
  return (
    <table>
      <caption>tåg {trainIdent(response)}</caption>
      <tbody>
        {response.announcements.map(announcement => {
          const location = announcement.LocationSignature;
          return (
            <TrainRow
              key={location}
              onClick={() => fetch({ location })}
              announcement={announcement}
              now={now}
            />
          );
        })}
      </tbody>
    </table>
  );
}
