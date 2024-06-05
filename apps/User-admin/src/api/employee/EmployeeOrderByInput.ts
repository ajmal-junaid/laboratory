import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  attendances?: SortOrder;
  createdAt?: SortOrder;
  dateOfJoining?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  labId?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
};
