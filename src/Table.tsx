import React from "react";
import { stationCount } from "./Response";
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
