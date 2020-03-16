import React from "react";
import { differenceInMinutes, parseISO } from "date-fns";
import cx from "classnames";
import TrainAnnouncement from "./TrainAnnouncement";

function Time(props: {
  activityType: string;
  times: { [p: string]: TrainAnnouncement };
  loc: string;
  id: string;
}) {
  const time: TrainAnnouncement =
    props.times[props.loc + props.id + props.activityType];

  return (
    <span className={cx("td", props.activityType, delay())}>
      {formatTimes(time)}
    </span>
  );

  function delay() {
    if (time && time.TimeAtLocation) {
      const d = differenceInMinutes(
        parseISO(time.TimeAtLocation),
        parseISO(time.AdvertisedTimeAtLocation)
      );

      if (d < -1) return "ahead";
      if (d < 1) return "ontime";
      if (d < 2) return "delay1";
      if (d < 4) return "delay2";
      if (d < 8) return "delay4";
      return "delay8";
    }
  }
}

export default Time;

function formatTimes(s: TrainAnnouncement) {
  if (!s) return "×";

  const a = f(s.AdvertisedTimeAtLocation);
  const e = f(s.EstimatedTimeAtLocation);
  const t = f(s.TimeAtLocation);
  const w = f(s.TimeAtLocationWithSeconds);

  if (a === t) return <b>{w}</b>;

  if (t) {
    if (s.ActivityType === "Ankomst") return <b>{w}</b>;

    return (
      <span>
        <b>{w}</b>/{removeHours(a)}
      </span>
    );
  }

  if (e)
    return (
      <span>
        <i>{e}</i>/{removeHours(a)}
      </span>
    );

  return a;

  function removeHours(time: string) {
    return time.substr(time.indexOf(":") + 1);
  }
}

function f(s: string) {
  let match;
  const regExp = [
    /T0(\d:\d\d):00/,
    /T0(\d:\d\d:\d\d)/,
    /T(\d\d:\d\d):00/,
    /T(\d\d:\d\d:\d\d)/
  ];

  for (let i = 0; i < regExp.length; i++)
    if ((match = regExp[i].exec(s))) return match[1];

  return "";
}
