import React from "react";
import { train } from "./Response";
import { TableProps } from "./TableProps";
import TrainRow from "./TrainRow";
import locations from "./locations";

export default function TrainTable(props: TableProps) {
  const { response, now, fetch } = props;
  const t = train(response);
  return (
    <table>
      {t ? (
        <caption>
          {t.TypeOfTraffic} {t.AdvertisedTrainIdent} till{" "}
          {t.ToLocation.map(l => locations(l.LocationName)).join()}
        </caption>
      ) : null}
      <tbody>
        {response.announcements.map(announcement => {
          const location = announcement.LocationSignature;
          return (
            <TrainRow
              key={location}
              onClick={() => fetch({ location })}
              announcement={announcement}
              now={now}
            />
          );
        })}
      </tbody>
    </table>
  );
}
