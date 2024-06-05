import { Attendance } from "../attendance/Attendance";
import { Lab } from "../lab/Lab";
import { Role } from "../role/Role";

export type Employee = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  dateOfJoining: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lab?: Lab | null;
  lastName: string | null;
  phoneNumber: string | null;
  role?: Role | null;
  updatedAt: Date;
};
