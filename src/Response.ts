import TrainAnnouncement from "./TrainAnnouncement";
import locations from "./locations";

export default interface Response {
  announcements: Array<TrainAnnouncement>;
}

export function stationCount(response: Response): number {
  if (!response.announcements) return 0;

  const signatures: { [key: string]: Boolean } = {};
  response.announcements.forEach(
    announcement => (signatures[announcement.LocationSignature] = true)
  );

  return Object.keys(signatures).length;
}

export function stationName(response: Response) {
  return (
    response.announcements &&
    response.announcements.length > 0 &&
    locations(response.announcements[0].LocationSignature)
  );
}

export function train(response: Response): TrainAnnouncement | undefined {
  const { announcements } = response;
  return announcements.find(announcement => announcement.TypeOfTraffic);
}