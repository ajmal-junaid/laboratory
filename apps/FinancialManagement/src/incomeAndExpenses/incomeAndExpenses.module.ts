import { Module } from "@nestjs/common";
import { IncomeAndExpensesModuleBase } from "./base/incomeAndExpenses.module.base";
import { IncomeAndExpensesService } from "./incomeAndExpenses.service";
import { IncomeAndExpensesController } from "./incomeAndExpenses.controller";
import { IncomeAndExpensesResolver } from "./incomeAndExpenses.resolver";

@Module({
  imports: [IncomeAndExpensesModuleBase],
  controllers: [IncomeAndExpensesController],
  providers: [IncomeAndExpensesService, IncomeAndExpensesResolver],
  exports: [IncomeAndExpensesService],
})
export class IncomeAndExpensesModule {}
