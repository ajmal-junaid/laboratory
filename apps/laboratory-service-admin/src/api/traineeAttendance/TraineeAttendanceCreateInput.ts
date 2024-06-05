import { TraineeWhereUniqueInput } from "../trainee/TraineeWhereUniqueInput";

export type TraineeAttendanceCreateInput = {
  date?: Date | null;
  status?: "Option1" | null;
  trainee?: TraineeWhereUniqueInput | null;
};
