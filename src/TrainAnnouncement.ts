export default interface TrainAnnouncement {
  ActivityId: string;
  ActivityType: string;
  Advertised: boolean;
  AdvertisedTimeAtLocation: Date;
  AdvertisedTrainIdent: string;
  Canceled: boolean;
  Deviation: string[];
  EstimatedTimeAtLocation: Date;
  EstimatedTimeIsPreliminary: boolean;
  FromLocation: FromLocation[];
  InformationOwner: string;
  LocationSignature: string;
  ModifiedTime: Date;
  NewEquipment: number;
  OtherInformation: string[];
  PlannedEstimatedTimeAtLocationIsValid: boolean;
  ProductInformation: string[];
  ScheduledDepartureDateTime: Date;
  TechnicalTrainIdent: string;
  TimeAtLocation: Date;
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
