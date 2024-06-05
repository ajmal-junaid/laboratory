import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AttendanceWhereInput = {
  date?: DateTimeNullableFilter;
  employeeId?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
