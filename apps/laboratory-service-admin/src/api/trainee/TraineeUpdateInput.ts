import { LabWhereUniqueInput } from "../lab/LabWhereUniqueInput";
import { TraineeAttendanceUpdateManyWithoutTraineesInput } from "./TraineeAttendanceUpdateManyWithoutTraineesInput";

export type TraineeUpdateInput = {
  dateOfJoining?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lab?: LabWhereUniqueInput | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  traineeAttendances?: TraineeAttendanceUpdateManyWithoutTraineesInput;
};
