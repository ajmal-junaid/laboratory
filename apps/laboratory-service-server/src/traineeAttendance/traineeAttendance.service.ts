import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraineeAttendanceServiceBase } from "./base/traineeAttendance.service.base";

@Injectable()
export class TraineeAttendanceService extends TraineeAttendanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
