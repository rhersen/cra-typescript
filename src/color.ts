import TrainAnnouncement from "./TrainAnnouncement";
import difference_in_minutes from "date-fns/difference_in_minutes";

export function color(a: TrainAnnouncement): string {
  const delay = minutes();
  return delay < 1
    ? "#0f0"
    : delay < 2
    ? "#fff"
    : delay < 4
    ? "#ff0"
    : delay < 8
    ? "#f80"
    : "#f00";

  function minutes() {
    return difference_in_minutes(a.TimeAtLocation, a.AdvertisedTimeAtLocation);
  }
}
