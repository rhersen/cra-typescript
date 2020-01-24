import TrainAnnouncement from "./TrainAnnouncement";
import difference_in_minutes from "date-fns/difference_in_minutes";

export default function color(a: TrainAnnouncement): string {
  const delay = minutes();

  return `rgb(${r(delay)},${g(delay)},${b(delay)})`;

  function r(d: number) {
    return d < 1 ? 0 : 256;
  }

  function g(d: number) {
    if (d < 4) return 256;
    if (d < 8) return 128;
    return 0;
  }

  function b(d: number) {
    return d === 1 ? 256 : 0;
  }

  function minutes() {
    return difference_in_minutes(a.TimeAtLocation, a.AdvertisedTimeAtLocation);
  }
}
