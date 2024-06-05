import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TraineeAttendanceWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  traineeId?: StringNullableFilter;
};
