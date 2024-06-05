import { TraineeAttendanceWhereInput } from "./TraineeAttendanceWhereInput";
import { TraineeAttendanceOrderByInput } from "./TraineeAttendanceOrderByInput";

export type TraineeAttendanceFindManyArgs = {
  where?: TraineeAttendanceWhereInput;
  orderBy?: Array<TraineeAttendanceOrderByInput>;
  skip?: number;
  take?: number;
};
