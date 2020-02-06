import React from "react";
import _ from "lodash";
import { line1, line2 } from "./formatLatestAnnouncement";
import color from "./color";
import { Actual } from "./currentTrains";
import { differenceInSeconds, parseISO } from "date-fns";

export default function Branch(props: {
  trains: Actual[];
  position: string;
  size: string;
}) {
  const fontSize = 0.3;

  const trainText = (train: Actual) => {
    if (!train.actual) return undefined;
    const secondsAgo = differenceInSeconds(
      new Date(),
      parseISO(train.actual.TimeAtLocationWithSeconds)
    );
    return [
      <tspan
        className={secondsAgo < 30 ? "new" : "old"}
        x="0.05"
        dy={fontSize * dy(props.trains.length)}
        fill={color(train.actual)}
        key={train.actual.AdvertisedTrainIdent + 1}
      >
        {line1(train)}
      </tspan>,
      <tspan
        x="0.05"
        dy={fontSize}
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
      <text className="train" style={{ fontSize: fontSize }}>
        {_.map(props.trains, trainText)}
      </text>
    </g>
  );
}

const dyValues = [
  undefined,
  6,
  (4 * (4 - 1.2)) / 3,
  undefined,
  undefined,
  1.5,
  1.15,
  0.85
];

function dy(l: number) {
  const dyValue = dyValues[l];
  if (dyValue) return dyValue;
  if (l === 3) return (4 * (4 - 1.2)) / (l + 1);
  return (4 * (4 - 1.2)) / (l + 1);
}
