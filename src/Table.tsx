import React from "react";
import Response from "./Response";
import { TableProps } from "./TableProps";
import StationTable from "./StationTable";
import TrainTable from "./TrainTable";

export default function Table(props: TableProps) {
  const count = stationCount(props.response);
  return count === 1 ? (
    <StationTable {...props} />
  ) : count > 1 ? (
    <TrainTable {...props} />
  ) : null;
}

function stationCount(response: Response): number {
  if (!response.announcements) return 0;

  const signatures: { [key: string]: Boolean } = {};
  response.announcements.forEach(
    announcement => (signatures[announcement.LocationSignature] = true)
  );

  return Object.keys(signatures).length;
}
