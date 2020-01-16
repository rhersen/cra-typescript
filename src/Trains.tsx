import React from "react";
import _ from "lodash";
import currentTrains from "./currentTrains";
import branchDivider from "./branchDivider";
import Branch from "./Branch";
import Response from "./Response";

export default function Trains(props: { response: Response }) {
  const grouped = _.groupBy(currentTrains(props.response), train =>
    branchDivider(train)
  );

  return (
    <g className={"normal"}>
      {_.map(["nw", "ne", "sw", "se", "c"], key => (
        <Branch key={key} trains={grouped[key]} position={key} size="normal" />
      ))}
    </g>
  );
}
