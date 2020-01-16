import _ from "lodash";
import * as wgs from "./wgs";
import TrainAnnouncement from "./TrainAnnouncement";

export default function currentTrains(announcement: TrainAnnouncement[]) {
  const grouped = _.groupBy(announcement, "AdvertisedTrainIdent");
  const object = _.filter(_.map(grouped, announcementsToObject), "actual");
  const sorted = sortTrains(object, direction(announcement));
  return _.reject(sorted, hasArrivedAtDestination);

  function announcementsToObject(v: TrainAnnouncement[]) {
    const actual = _.maxBy(
      _.filter(v, "TimeAtLocation"),
      a => a.TimeAtLocation + a.ActivityType
    );
    const next = _.minBy(
      _.reject(v, "TimeAtLocation"),
      a => a.AdvertisedTimeAtLocation + a.ActivityType
    );

    return { actual, next };
  }

  function direction(announcements: TrainAnnouncement[]) {
    return (
      announcements.length &&
      /\d\d\d[13579]/.test(announcements[0].AdvertisedTrainIdent)
    );
  }

  function hasArrivedAtDestination(train: { actual: TrainAnnouncement; }) {
    return (
      train.actual.ActivityType === "Ankomst" &&
      _.map(train.actual.ToLocation, "LocationName").join() ===
        train.actual.LocationSignature
    );
  }

  function sortTrains(
    obj: {
      actual: TrainAnnouncement | undefined;
      next: TrainAnnouncement | undefined;
    }[],
    dir: number | boolean
  ) {
    return _.orderBy(
      obj,
      [
        a => north(a.actual ? a.actual.LocationSignature : ""),
        "actual.ActivityType",
        "actual.TimeAtLocation"
      ],
      ["desc", dir ? "asc" : "desc", dir ? "desc" : "asc"]
    );
  }

  function north(location: string) {
    if (location === "Gdv") return between("Ngd", "Nyh");
    if (location === "Söc") return between("Söd", "Söu");
    if (location === "Gn") return between("Mö", "Ssä");
    return wgs.north(location);
  }

  function between(loc1: string, loc2: string) {
    return 0.5 * wgs.north(loc1) + 0.5 * wgs.north(loc2);
  }
}
