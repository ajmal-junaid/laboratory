import { SortOrder } from "../../util/SortOrder";

export type IncomeAndExpensesOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  verifiedBy?: SortOrder;
};
