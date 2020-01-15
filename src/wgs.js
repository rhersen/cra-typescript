import locations from "./locations";

export function east(location, stations) {
  const geometry = locations(location);
  return geometry && geometry.east;
}

export function north(location, stations) {
  const geometry = locations(location);
  return geometry && geometry.north;
}
