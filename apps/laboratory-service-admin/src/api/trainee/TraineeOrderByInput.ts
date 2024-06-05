import { SortOrder } from "../../util/SortOrder";

export type TraineeOrderByInput = {
  createdAt?: SortOrder;
  dateOfJoining?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  labId?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
