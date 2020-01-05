import { addSeconds, differenceInSeconds, format, parseISO } from "date-fns";
import locations from "./locations";

export default interface TrainAnnouncement {
  ActivityId: string;
  ActivityType: string;
  Advertised: boolean;
  AdvertisedTimeAtLocation: string;
  AdvertisedTrainIdent: string;
  Canceled: boolean;
  Deviation: string[];
  EstimatedTimeAtLocation: string;
  EstimatedTimeIsPreliminary: boolean;
  FromLocation: Location[];
  InformationOwner: string;
  LocationSignature: string;
  ModifiedTime: string;
  NewEquipment: number;
  OtherInformation: string[];
  PlannedEstimatedTimeAtLocationIsValid: boolean;
  ProductInformation: string[];
  ScheduledDepartureDateTime: string;
  TechnicalTrainIdent: string;
  TimeAtLocation: string;
  ToLocation: Location[];
  TrackAtLocation: string;
  TypeOfTraffic: string;
  ViaToLocation: Location[];
  WebLink: string;
}

interface Location {
  LocationName: string;
  Priority: number;
  Order: number;
}

export function time(announcement: TrainAnnouncement) {
  return hmm(announcement.AdvertisedTimeAtLocation);

  function hmm(advertised: string) {
    const parsed = parseISO(advertised);
    return format(parsed, parsed.getSeconds() ? "H:mm:ss" : "H:mm");
  }
}

// eslint-disable-next-line complexity
export function countdown(announcement: TrainAnnouncement, now: Date) {
  if (!now) return "";

  const dateLeft: string =
    announcement.EstimatedTimeAtLocation ||
    announcement.AdvertisedTimeAtLocation;
  const seconds = differenceInSeconds(parseISO(dateLeft), now);

  if (seconds <= -100) return "";
  if (seconds >= 600)
    return `${format(addSeconds(new Date(0), seconds), "m")}min`;
  if (seconds >= 100) return format(addSeconds(new Date(0), seconds), "m:ss");
  return `${seconds}s`;
}

export function fromLocation(announcement: TrainAnnouncement) {
  return (
    announcement.FromLocation &&
    announcement.FromLocation.map(location =>
      locations(location.LocationName)
    ).join()
  );
}

export function directionClass(announcement: TrainAnnouncement) {
  return /\d+[24680]$/.test(announcement.AdvertisedTrainIdent)
    ? "northbound"
    : "southbound";
}
