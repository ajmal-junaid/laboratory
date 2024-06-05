import { JsonValue } from "type-fest";

export type Employee = {
  attendances: JsonValue;
  createdAt: Date;
  dateOfJoining: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  labId: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  roleId: string | null;
  updatedAt: Date;
};
