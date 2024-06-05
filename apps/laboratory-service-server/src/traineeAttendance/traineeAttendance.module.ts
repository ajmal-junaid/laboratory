import { Module } from "@nestjs/common";
import { TraineeAttendanceModuleBase } from "./base/traineeAttendance.module.base";
import { TraineeAttendanceService } from "./traineeAttendance.service";
import { TraineeAttendanceController } from "./traineeAttendance.controller";
import { TraineeAttendanceResolver } from "./traineeAttendance.resolver";

@Module({
  imports: [TraineeAttendanceModuleBase],
  controllers: [TraineeAttendanceController],
  providers: [TraineeAttendanceService, TraineeAttendanceResolver],
  exports: [TraineeAttendanceService],
})
export class TraineeAttendanceModule {}
