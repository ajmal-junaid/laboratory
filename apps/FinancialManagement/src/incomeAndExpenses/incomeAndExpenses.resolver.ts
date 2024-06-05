import * as graphql from "@nestjs/graphql";
import { IncomeAndExpensesResolverBase } from "./base/incomeAndExpenses.resolver.base";
import { IncomeAndExpenses } from "./base/IncomeAndExpenses";
import { IncomeAndExpensesService } from "./incomeAndExpenses.service";

@graphql.Resolver(() => IncomeAndExpenses)
export class IncomeAndExpensesResolver extends IncomeAndExpensesResolverBase {
  constructor(protected readonly service: IncomeAndExpensesService) {
    super(service);
  }
}
