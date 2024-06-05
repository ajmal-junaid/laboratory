import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LabWhereUniqueInput } from "../lab/LabWhereUniqueInput";
import { TraineeAttendanceListRelationFilter } from "../traineeAttendance/TraineeAttendanceListRelationFilter";

export type TraineeWhereInput = {
  dateOfJoining?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lab?: LabWhereUniqueInput;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  traineeAttendances?: TraineeAttendanceListRelationFilter;
};
