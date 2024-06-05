import { LabWhereUniqueInput } from "../lab/LabWhereUniqueInput";
import { TraineeAttendanceCreateNestedManyWithoutTraineesInput } from "./TraineeAttendanceCreateNestedManyWithoutTraineesInput";

export type TraineeCreateInput = {
  dateOfJoining?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lab?: LabWhereUniqueInput | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  traineeAttendances?: TraineeAttendanceCreateNestedManyWithoutTraineesInput;
};
