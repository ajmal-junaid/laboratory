import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabServiceBase } from "./base/lab.service.base";

@Injectable()
export class LabService extends LabServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
