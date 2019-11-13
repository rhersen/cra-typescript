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
  FromLocation: FromLocation[];
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
  ToLocation: ToLocation[];
  TrackAtLocation: string;
  TypeOfTraffic: string;
  ViaToLocation: ViaToLocation[];
  WebLink: string;
}

interface FromLocation {
  LocationName: string;
  Priority: number;
  Order: number;
}

interface ToLocation {
  LocationName: string;
  Priority: number;
  Order: number;
}

interface ViaToLocation {
  LocationName: string;
  Priority: number;
  Order: number;
}
