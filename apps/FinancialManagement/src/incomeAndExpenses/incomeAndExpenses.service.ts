import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncomeAndExpensesServiceBase } from "./base/incomeAndExpenses.service.base";

@Injectable()
export class IncomeAndExpensesService extends IncomeAndExpensesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
