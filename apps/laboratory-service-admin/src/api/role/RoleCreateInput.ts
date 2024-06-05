import { EmployeeCreateNestedManyWithoutRolesInput } from "./EmployeeCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutRolesInput;
  name?: string | null;
};
