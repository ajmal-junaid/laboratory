import { EmployeeUpdateManyWithoutRolesInput } from "./EmployeeUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  employees?: EmployeeUpdateManyWithoutRolesInput;
  name?: string | null;
};
