import { SortOrder } from "../../util/SortOrder";

export type TraineeAttendanceOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  traineeId?: SortOrder;
  updatedAt?: SortOrder;
};
