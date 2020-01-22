import * as wgs from "./wgs";
import { Actual } from "./currentTrains";

export default function branchDivider(train: Actual): string {
  if (!train.actual) return "";
  const location = train.actual.LocationSignature;
  const north = wgs.north(location);
  if (!north) return "";

  return north > 59.36 ? n() : s();


  function n() {
    return north > 59.64
      ? "ne"
      : north > 59.407
      ? `n${leftRight(17.84)}`
      : `n${leftRight(18)}`;
  }

  function s() {
    return north < 59.17
        ? `s${leftRight(17.84)}`
        : north < 59.27
            ? `s${leftRight(18)}`
            : "c";
  }

  function leftRight(limit: number) {
    const east = wgs.east(location);
    if (!east) return "";
    return east < limit ? "w" : "e";
  }
}
