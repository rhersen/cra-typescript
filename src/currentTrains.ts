import _ from "lodash";
import * as wgs from "./wgs";
import TrainAnnouncement from "./TrainAnnouncement";

export type Actual = {
  latest: TrainAnnouncement | undefined;
};

export default function currentTrains(
  announcement: TrainAnnouncement[]
): Actual[] {
  const grouped = _.groupBy(announcement, "AdvertisedTrainIdent");
  const includingUndefineds: Actual[] = _.map(grouped, selectLatest);
  const noUndefineds: Actual[] = _.filter(includingUndefineds, "latest");
  const sorted: Actual[] = sortTrains(noUndefineds, direction(announcement));
  return _.filter(_.reject(sorted, hasArrivedAtDestination), isPendel);

  function selectLatest(
    trainAnnouncements: TrainAnnouncement[]
  ): Actual {
    const latest: TrainAnnouncement | undefined = _.maxBy(
      trainAnnouncements,
      (trainAnnouncement: TrainAnnouncement) =>
        trainAnnouncement.TimeAtLocationWithSeconds +
        trainAnnouncement.ActivityType
    );

    if (!latest) return { latest: undefined };

    if (!latest.ProductInformation) {
      const found = _.find(trainAnnouncements, "ProductInformation");
      if (found)
        return {
          latest: {
            ...latest,
            ProductInformation: found.ProductInformation,
            ToLocation: found.ToLocation
          }
        };
    }

    return { latest: latest };
  }

  function direction(announcements: TrainAnnouncement[]) {
    return (
      announcements.length &&
      /\d\d\d[13579]/.test(announcements[0].AdvertisedTrainIdent)
    );
  }

  function hasArrivedAtDestination({ latest }: Actual) {
    if (!latest) return false;
    if (latest.ActivityType !== "Ankomst") return false;
    return (
      _.map(latest.ToLocation, "LocationName").join() ===
      latest.LocationSignature
    );
  }

  function isPendel(train: Actual): boolean {
    if (!train.latest) return false;
    return (
      train.latest.ProductInformation &&
      train.latest.ProductInformation.length === 2
    );
  }

  function sortTrains(obj: Actual[], dir: number | boolean): Actual[] {
    return _.orderBy(
      obj,
      [
        a => north(a.latest ? a.latest.LocationSignature : ""),
        "latest.ActivityType",
        "latest.TimeAtLocation"
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
