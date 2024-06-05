import { IncomeAndExpenses as TIncomeAndExpenses } from "../api/incomeAndExpenses/IncomeAndExpenses";

export const INCOMEANDEXPENSES_TITLE_FIELD = "verifiedBy";

export const IncomeAndExpensesTitle = (record: TIncomeAndExpenses): string => {
  return record.verifiedBy?.toString() || String(record.id);
};
