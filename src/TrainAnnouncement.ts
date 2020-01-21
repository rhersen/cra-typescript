export default interface TrainAnnouncement {
  ActivityId: string;
  ActivityType: string;
  Advertised: boolean;
  AdvertisedTimeAtLocation: string;
  AdvertisedTrainIdent: string;
  Canceled: boolean;
  Deviation: Description[];
  EstimatedTimeAtLocation: string;
  EstimatedTimeIsPreliminary: boolean;
  FromLocation: Location[];
  InformationOwner: string;
  LocationSignature: string;
  ModifiedTime: string;
  NewEquipment: number;
  OtherInformation: Description[];
  ProductInformation: Description[];
  ScheduledDepartureDateTime: string;
  TechnicalTrainIdent: string;
  TimeAtLocation: string;
  TimeAtLocationWithSeconds: string;
  ToLocation: Location[];
  TrackAtLocation: string;
  TypeOfTraffic: Description;
  ViaToLocation: Location[];
  WebLink: string;
}

interface Location {
  LocationName: string;
  Priority: number;
  Order: number;
}

interface Description {
  Code: string;
  Description: string;
}

export function shortText(announcement: TrainAnnouncement): string {
  const deviations: string[] = (announcement.Deviation || []).map(descriptions);

  return deviations
    ? deviations
        .map(s => {
          if (/Kort/.test(s)) return "K";
          if (s.length) return "*";
          return s;
        })
        .join()
    : "";
}

export function deviationText(announcement: TrainAnnouncement): string[] {
  return (announcement.Deviation || [])
    .map(descriptions)
    .filter(s => !/Kort/.test(s));
}

function descriptions(deviation: Description): string {
  return deviation.Description;
}

export function key(announcement: TrainAnnouncement) {
  return (
    announcement.ActivityType.substr(1, 1) +
    announcement.AdvertisedTrainIdent +
    announcement.LocationSignature
  );
}
