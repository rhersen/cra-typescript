import locations from "./locations";

export function east(location) {
  const geometry = locations(location);
  return geometry && geometry.east;
}

export function north(location) {
  const geometry = locations(location);
  return geometry && geometry.north;
}
