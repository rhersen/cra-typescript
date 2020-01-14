import React from "react";
import {TableProps} from "./TableProps";
import TrainRow from "./TrainRow";
import {key} from "./TrainAnnouncement";

export default function Table(props: TableProps) {
  const { response, now } = props;
  return (
    <table>
      <tbody>
        {response.announcements.map(a => {
          return <TrainRow key={key(a)} announcement={a} now={now} />;
        })}
      </tbody>
    </table>
  );
}
