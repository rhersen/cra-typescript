import React from "react";
import _ from "lodash";
import TrainAnnouncement from "./TrainAnnouncement";
import difference_in_minutes from "date-fns/difference_in_minutes";
import { line1, line2 } from "./formatLatestAnnouncement";

export default function Branch(props: {
  trains: any;
  position: any;
  size: string;
}) {
  const trainText = (train: { actual: TrainAnnouncement }) => {
    return [
      <tspan
        x="0.05"
        dy={fontSize() * dy(props.trains.length)}
        fill={color(train.actual)}
        key={train.actual.AdvertisedTrainIdent + 1}
      >
        {line1(train)}
      </tspan>,
      <tspan
        x="0.05"
        dy={fontSize()}
        fill={color(train.actual)}
        key={train.actual.AdvertisedTrainIdent + 2}
      >
        {line2(train)}
      </tspan>
    ];
  };
  return (
    <g className={`pos-${props.position}`}>
      <rect className="branch" x="0" y="0" height="4" width="4" />
      <text className="train" style={{ fontSize: fontSize() }}>
        {_.map(props.trains, trainText)}
      </text>
    </g>
  );

  function fontSize() {
    const normal = 0.3;

    const sizes = {
      normal: normal,
      expanded: normal / 2,
      collapsed: normal * 2
    };

    // @ts-ignore
    return sizes[props.size];
  }
}

function color(a: any) {
  const delay = minutes(a);
  return delay < 1
    ? "#0f0"
    : delay < 2
    ? "#fff"
    : delay < 4
    ? "#ff0"
    : delay < 8
    ? "#f80"
    : "#f00";
}

function minutes(a: any) {
  return difference_in_minutes(a.TimeAtLocation, a.AdvertisedTimeAtLocation);
}

function dy(l: any) {
  if (l === 1) return 6;
  if (l === 2) return (4 * (4 - 1.2)) / 3;
  if (l === 3) return (4 * (4 - 1.2)) / (l + 1);
  if (l === 5) return 1.5;
  if (l === 6) return 1.15;
  if (l === 7) return 0.85;
  return (4 * (4 - 1.2)) / (l + 1);
}
