import * as graphql from "@nestjs/graphql";
import { TraineeAttendanceResolverBase } from "./base/traineeAttendance.resolver.base";
import { TraineeAttendance } from "./base/TraineeAttendance";
import { TraineeAttendanceService } from "./traineeAttendance.service";

@graphql.Resolver(() => TraineeAttendance)
export class TraineeAttendanceResolver extends TraineeAttendanceResolverBase {
  constructor(protected readonly service: TraineeAttendanceService) {
    super(service);
  }
}
