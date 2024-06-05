import { AttendanceUpdateManyWithoutEmployeesInput } from "./AttendanceUpdateManyWithoutEmployeesInput";
import { LabWhereUniqueInput } from "../lab/LabWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type EmployeeUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutEmployeesInput;
  dateOfJoining?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lab?: LabWhereUniqueInput | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  role?: RoleWhereUniqueInput | null;
};
