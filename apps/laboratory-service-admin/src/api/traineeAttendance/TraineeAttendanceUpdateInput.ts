import { TraineeWhereUniqueInput } from "../trainee/TraineeWhereUniqueInput";

export type TraineeAttendanceUpdateInput = {
  date?: Date | null;
  status?: "Option1" | null;
  trainee?: TraineeWhereUniqueInput | null;
};
