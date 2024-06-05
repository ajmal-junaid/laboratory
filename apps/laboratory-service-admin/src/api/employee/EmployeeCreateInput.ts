import { AttendanceCreateNestedManyWithoutEmployeesInput } from "./AttendanceCreateNestedManyWithoutEmployeesInput";
import { LabWhereUniqueInput } from "../lab/LabWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutEmployeesInput;
  dateOfJoining?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lab?: LabWhereUniqueInput | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  role?: RoleWhereUniqueInput | null;
};
