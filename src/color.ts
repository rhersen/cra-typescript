import TrainAnnouncement from "./TrainAnnouncement";
import difference_in_seconds from "date-fns/difference_in_seconds";

export default function color(a: TrainAnnouncement): string {
  const delay = seconds();

  return `rgb(${r(delay)},${g(delay)},${b(delay)})`;

  function r(d: number) {
    if (d < 60) return d * 256 / 60;
    return 256;
  }

  function g(d: number) {
    if (d < 120) return 256;
    if (d < 240) return 128 + (240 - d) * 128 / 120;
    if (d < 480) return (480 - d) * 128 / 240;
    return 0;
  }

  function b(d: number) {
    if (d < 60) return d * 256 / 60;
    if (d < 120) return (120 - d) * 256 / 60;
    return 0;
  }

  function seconds() {
    return difference_in_seconds(
      a.TimeAtLocationWithSeconds,
      a.AdvertisedTimeAtLocation
    );
  }
}
