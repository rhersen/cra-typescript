import _ from "lodash";
import * as wgs from './wgs'

export default function currentTrains(announcement, stations) {
  const grouped = _.groupBy(announcement, 'AdvertisedTrainIdent')
  const object = _.filter(_.map(grouped, announcementsToObject), 'actual')
  const sorted = sortTrains(object, direction(announcement), stations)
  return _.reject(sorted, hasArrivedAtDestination)

  function announcementsToObject(v) {
    const actual = _.maxBy(
      _.filter(v, 'TimeAtLocation'),
      a => a.TimeAtLocation + a.ActivityType
    )
    const next = _.minBy(
      _.reject(v, 'TimeAtLocation'),
      a => a.AdvertisedTimeAtLocation + a.ActivityType
    )

    return { actual, next }
  }

  function direction(announcements) {
    return (
      announcements.length &&
      /\d\d\d[13579]/.test(announcements[0].AdvertisedTrainIdent)
    )
  }

  function hasArrivedAtDestination(train) {
    return (
      train.actual.ActivityType === 'Ankomst' &&
      _.map(train.actual.ToLocation, 'LocationName').join() ===
        train.actual.LocationSignature
    )
  }

  function sortTrains(obj, dir) {
    return _.orderBy(
      obj,
      [
        a => north(a.actual.LocationSignature, stations),
        'actual.ActivityType',
        'actual.TimeAtLocation',
      ],
      ['desc', dir ? 'asc' : 'desc', dir ? 'desc' : 'asc']
    )
  }

  function north(location) {
    if (location === 'Gdv') return between('Ngd', 'Nyh')
    if (location === 'Söc') return between('Söd', 'Söu')
    if (location === 'Gn') return between('Mö', 'Ssä')
    return wgs.north(location, stations)
  }

  function between(loc1, loc2) {
    return 0.5 * wgs.north(loc1, stations) + 0.5 * wgs.north(loc2, stations)
  }
}
