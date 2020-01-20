import _ from "lodash";
import * as wgs from "./wgs";
import TrainAnnouncement from "./TrainAnnouncement";

export type Actual = {
  actual: TrainAnnouncement | undefined;
};

export default function currentTrains(
  announcement: TrainAnnouncement[]
): Actual[] {
  const grouped = _.groupBy(announcement, "AdvertisedTrainIdent");
  const object: Actual[] = _.filter(
    _.map(grouped, announcementsToObject),
    "actual"
  );
  const sorted: Actual[] = sortTrains(object, direction(announcement));
  return _.reject(sorted, hasArrivedAtDestination);

  function announcementsToObject(v: TrainAnnouncement[]): Actual {
    const actual: TrainAnnouncement | undefined = _.maxBy(
      _.filter(v, "TimeAtLocation"),
      a => a.TimeAtLocation + a.ActivityType
    );

    return { actual };
  }

  function direction(announcements: TrainAnnouncement[]) {
    return (
      announcements.length &&
      /\d\d\d[13579]/.test(announcements[0].AdvertisedTrainIdent)
    );
  }

  function hasArrivedAtDestination({ actual }: Actual) {
    if (!actual) return false;
    if (actual.ActivityType !== "Ankomst") return false;
    return (
      _.map(actual.ToLocation, "LocationName").join() ===
      actual.LocationSignature
    );
  }

  function sortTrains(obj: Actual[], dir: number | boolean): Actual[] {
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
