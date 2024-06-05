import { SortOrder } from "../../util/SortOrder";

export type LabOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  employees?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  trainees?: SortOrder;
  updatedAt?: SortOrder;
};
