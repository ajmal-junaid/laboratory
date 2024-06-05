export type Inventory = {
  createdAt: Date;
  id: string;
  itemName: string | null;
  manager: string | null;
  quantity: number | null;
  updatedAt: Date;
};
