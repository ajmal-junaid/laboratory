import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  attendances?: JsonFilter;
  dateOfJoining?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  labId?: StringNullableFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  roleId?: StringNullableFilter;
};
