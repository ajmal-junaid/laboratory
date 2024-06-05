import { JsonValue } from "type-fest";

export type Trainee = {
  createdAt: Date;
  dateOfJoining: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  labId: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  traineeAttendances: JsonValue;
  updatedAt: Date;
};
