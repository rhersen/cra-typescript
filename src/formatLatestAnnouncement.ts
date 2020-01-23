import _ from "lodash";
import locations from "./locations";
import difference_in_seconds from "date-fns/difference_in_seconds";
import { Actual } from "./currentTrains";
import TrainAnnouncement from "./TrainAnnouncement";

export function line1(train: Actual) {
  const a = train.actual;

  if (!a) return "Aktuell information saknas";

  return `${id(a)} mot ${_.map(_.map(a.ToLocation, "LocationName"), loc =>
    stationName(loc)
  )} ${precision(a)}`;
}

export function line2(train: Actual) {
  const a = train.actual;

  if (!a) return "line2";

  return `${activity(a)} ${location(
    a
  )} kl ${a.TimeAtLocationWithSeconds.substring(11, 19)}`;

  function location(announcement: TrainAnnouncement) {
    return stationName(announcement.LocationSignature);
  }
}

function id(a: TrainAnnouncement) {
  return a.AdvertisedTrainIdent;
}

function stationName(locationSignature: string) {
  return (
    (locations &&
      locations(locationSignature) &&
      locations(locationSignature).AdvertisedShortLocationName) ||
    locationSignature
  );
}

function precision(a: TrainAnnouncement) {
  const delay = difference_in_seconds(
    a.TimeAtLocationWithSeconds,
    a.AdvertisedTimeAtLocation
  );

  if (delay > 240) return `${Math.trunc(delay / 60)} minuter sent`;
  if (delay > 30) return `${delay}s sent`;
  if (delay < -60) return "i god tid";
  return "i tid";
}

function activity(a: TrainAnnouncement) {
  return a.ActivityType === "Ankomst" ? "ank" : "avg";
}
