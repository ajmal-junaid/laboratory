import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LabWhereUniqueInput } from "../lab/LabWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeWhereInput = {
  attendances?: AttendanceListRelationFilter;
  dateOfJoining?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lab?: LabWhereUniqueInput;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
};
