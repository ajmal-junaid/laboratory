import { InputJsonValue } from "../../types";

export type EmployeeUpdateInput = {
  attendances?: InputJsonValue;
  dateOfJoining?: Date | null;
  email?: string | null;
  firstName?: string | null;
  labId?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  roleId?: string | null;
};
