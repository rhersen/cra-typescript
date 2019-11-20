import Response from "./Response";

export type TableProps = {
  response: Response;
  now: Date;
  fetchTrain: (id: string) => void;
};