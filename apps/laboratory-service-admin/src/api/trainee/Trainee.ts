import { Lab } from "../lab/Lab";
import { TraineeAttendance } from "../traineeAttendance/TraineeAttendance";

export type Trainee = {
  createdAt: Date;
  dateOfJoining: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lab?: Lab | null;
  lastName: string | null;
  phoneNumber: string | null;
  traineeAttendances?: Array<TraineeAttendance>;
  updatedAt: Date;
};
