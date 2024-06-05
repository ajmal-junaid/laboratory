import { JsonValue } from "type-fest";

export type Lab = {
  address: string | null;
  createdAt: Date;
  employees: JsonValue;
  id: string;
  name: string | null;
  trainees: JsonValue;
  updatedAt: Date;
};
