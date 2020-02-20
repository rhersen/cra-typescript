import React from "react";
import _ from "lodash";
import { line1, line2 } from "./formatLatestAnnouncement";
import getColor from "./color";
import { Actual } from "./currentTrains";
import { differenceInSeconds, parseISO } from "date-fns";

export default function Branch(props: {
  trains: Actual[];
  position?: string;
  size: string;
}) {
  const trainText = (train: Actual) => {
    if (!train.actual) return undefined;
    const secondsAgo = differenceInSeconds(
      new Date(),
      parseISO(train.actual.TimeAtLocationWithSeconds)
    );
    const className = secondsAgo < 30 ? "new" : "old";
    const color = getColor(train.actual);
    return (
      <div className="train">
        <div
          className={className}
          style={{ color }}
          key={`${train.actual.AdvertisedTrainIdent}l1`}
        >
          {line1(train)}
        </div>
        <div
          className={className}
          style={{ color }}
          key={`${train.actual.AdvertisedTrainIdent}l2`}
        >
          {line2(train)}
        </div>
      </div>
    );
  };
  return <div className="branch">{_.map(props.trains, trainText)}</div>;
}
