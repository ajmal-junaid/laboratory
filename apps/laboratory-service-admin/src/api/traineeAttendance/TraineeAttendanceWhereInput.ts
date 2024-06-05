import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TraineeWhereUniqueInput } from "../trainee/TraineeWhereUniqueInput";

export type TraineeAttendanceWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  trainee?: TraineeWhereUniqueInput;
};
