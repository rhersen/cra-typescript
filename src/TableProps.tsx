import Response from "./Response";
import { SearchParams } from "./SearchParams";

export type TableProps = {
  response: Response;
  now: Date;
  fetch: (params: SearchParams) => void;
};
