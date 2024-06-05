import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TraineeListRelationFilter } from "../trainee/TraineeListRelationFilter";

export type LabWhereInput = {
  address?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  trainees?: TraineeListRelationFilter;
};
