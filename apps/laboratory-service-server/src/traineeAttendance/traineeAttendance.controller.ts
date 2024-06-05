import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TraineeAttendanceService } from "./traineeAttendance.service";
import { TraineeAttendanceControllerBase } from "./base/traineeAttendance.controller.base";

@swagger.ApiTags("traineeAttendances")
@common.Controller("traineeAttendances")
export class TraineeAttendanceController extends TraineeAttendanceControllerBase {
  constructor(protected readonly service: TraineeAttendanceService) {
    super(service);
  }
}
