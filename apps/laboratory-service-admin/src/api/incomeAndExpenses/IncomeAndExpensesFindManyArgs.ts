import { IncomeAndExpensesWhereInput } from "./IncomeAndExpensesWhereInput";
import { IncomeAndExpensesOrderByInput } from "./IncomeAndExpensesOrderByInput";

export type IncomeAndExpensesFindManyArgs = {
  where?: IncomeAndExpensesWhereInput;
  orderBy?: Array<IncomeAndExpensesOrderByInput>;
  skip?: number;
  take?: number;
};
