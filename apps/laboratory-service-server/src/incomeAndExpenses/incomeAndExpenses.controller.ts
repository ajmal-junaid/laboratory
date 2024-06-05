import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IncomeAndExpensesService } from "./incomeAndExpenses.service";
import { IncomeAndExpensesControllerBase } from "./base/incomeAndExpenses.controller.base";

@swagger.ApiTags("incomeAndExpenses")
@common.Controller("incomeAndExpenses")
export class IncomeAndExpensesController extends IncomeAndExpensesControllerBase {
  constructor(protected readonly service: IncomeAndExpensesService) {
    super(service);
  }
}
