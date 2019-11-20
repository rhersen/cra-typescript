import Response from "./Response";

export type TableProps = {
  response: Response;
  now: Date;
  fetchStation: (location: string) => void;
  fetchTrain: (id: string) => void;
};