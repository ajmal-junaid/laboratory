import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemName?: SortOrder;
  manager?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
