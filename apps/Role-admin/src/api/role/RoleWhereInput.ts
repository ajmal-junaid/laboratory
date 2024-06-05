import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoleWhereInput = {
  employees?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
