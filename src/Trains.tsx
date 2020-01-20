import React from "react";
import _ from "lodash";
import currentTrains, { Actual } from "./currentTrains";
import branchDivider from "./branchDivider";
import Branch from "./Branch";
import TrainAnnouncement from "./TrainAnnouncement";

export default function Trains(props: { response: TrainAnnouncement[] }) {
  const grouped = _.groupBy(currentTrains(props.response), branchDivider);

  return (
    <g className={"normal"}>
      {_.map(["nw", "ne", "sw", "se", "c"], key => {
        const trains: Actual[] = grouped[key];
        return (
          <Branch key={key} trains={trains} position={key} size="normal" />
        );
      })}
    </g>
  );
}
