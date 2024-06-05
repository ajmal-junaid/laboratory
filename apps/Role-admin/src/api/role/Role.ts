import { JsonValue } from "type-fest";

export type Role = {
  createdAt: Date;
  employees: JsonValue;
  id: string;
  name: string | null;
  updatedAt: Date;
};
