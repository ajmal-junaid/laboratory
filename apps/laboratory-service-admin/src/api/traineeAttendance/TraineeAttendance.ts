import { Trainee } from "../trainee/Trainee";

export type TraineeAttendance = {
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  trainee?: Trainee | null;
  updatedAt: Date;
};
