import React from "react";
import "./App.css";
import locations from "./locations";
import Table from "./Table";
export interface FromLocation {
  LocationName: string;
  Priority: number;
  Order: number;
}

export interface ToLocation {
  LocationName: string;
  Priority: number;
  Order: number;
}

export interface ViaToLocation {
  LocationName: string;
  Priority: number;
  Order: number;
}

export interface TrainAnnouncement {
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

type MyState = {
  announcements: Array<TrainAnnouncement>;
  msg: string;
  now: Date;
};

export default class App extends React.Component<{}, MyState> {
  state: MyState = {
    announcements: [],
    msg: "",
    now: new Date()
  };

  render() {
    const { msg, announcements, now } = this.state;
    return (
      <div>
        {this.button("Sub")}
        {this.button("Sod")}
        {this.button("Sci")}
        {this.button("Sst")}
        {this.button("Åbe")}
        {this.button("Äs")}
        {this.button("Sta")}
        {this.button("Hu")}
        {this.button("Flb")}
        {this.button("Tul")}
        {this.button("Tu")}
        <div>{msg}</div>
        <Table announcements={announcements} now={now} />
      </div>
    );
  }

  button(location: string) {
    return (
      <button
        onClick={async () => {
          const response = await fetch(
            `/.netlify/functions/announcements?location=${location}`
          );
          const json = await response.json();
          if (json.msg) this.setState({ msg: json.msg });
          if (json.TrainAnnouncement)
            this.setState({ announcements: json.TrainAnnouncement, msg: "" });
        }}
      >
        {locations(location)}
      </button>
    );
  }
}
