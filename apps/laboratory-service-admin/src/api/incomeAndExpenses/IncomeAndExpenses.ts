export type IncomeAndExpenses = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  verifiedBy: string | null;
};
