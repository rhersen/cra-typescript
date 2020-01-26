import TrainAnnouncement from "./TrainAnnouncement";
import difference_in_seconds from "date-fns/difference_in_seconds";

export default function color(a: TrainAnnouncement): string {
  const delay = seconds();

  return `rgb(${r(delay)},${g(delay)},${b(delay)})`;

  function r(d: number) {
    return d < 60 ? 0 : 256;
  }

  function g(d: number) {
    if (d < 240) return 256;
    if (d < 480) return 128;
    return 0;
  }

  function b(d: number) {
    return d === 60 ? 256 : 0;
  }

  function seconds() {
    return difference_in_seconds(a.TimeAtLocation, a.AdvertisedTimeAtLocation);
  }
}
