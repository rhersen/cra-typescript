import * as wgs from "./wgs";
import { Actual } from "./currentTrains";

export default function branchDivider(train: Actual): string {
  if (!train.actual) return "";
  const location = train.actual.LocationSignature;
  const north = wgs.north(location);
  if (!north) return "";

  if (north > 59.64) return "ne";
  if (north > 59.407) return `n${leftRight(17.84)}`;
  if (north > 59.36) return `n${leftRight(18)}`;
  if (north < 59.17) return `s${leftRight(17.84)}`;
  if (north < 59.27) return `s${leftRight(18)}`;
  return "c";

  function leftRight(limit: number) {
    const east = wgs.east(location);
    if (!east) return "";
    return east < limit ? "w" : "e";
  }
}
