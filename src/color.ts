import TrainAnnouncement from "./TrainAnnouncement";
import { differenceInSeconds, parseISO } from "date-fns";

export default function color(a: TrainAnnouncement): string {
  const delay = seconds();

  return `rgb(${r(delay)},${g(delay)},${b(delay)})`;

  function r(d: number) {
    if (d < 60) return (d * 256) / 60;
    return 256;
  }

  function g(d: number) {
    if (d < 120) return 256;
    if (d < 240) return 128 + ((240 - d) * 128) / 120;
    const span = 900;
    if (d < 240 + span) return ((240 + span - d) * 128) / span;
    return 0;
  }

  function b(d: number) {
    if (d < 60) return (d * 256) / 60;
    if (d < 120) return ((120 - d) * 256) / 60;
    return 0;
  }

  function seconds() {
    return differenceInSeconds(
      parseISO(a.TimeAtLocationWithSeconds),
      parseISO(a.AdvertisedTimeAtLocation)
    );
  }
}
