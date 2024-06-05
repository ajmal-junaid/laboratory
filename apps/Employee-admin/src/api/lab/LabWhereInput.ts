import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type LabWhereInput = {
  address?: StringNullableFilter;
  employees?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  trainees?: JsonFilter;
};
