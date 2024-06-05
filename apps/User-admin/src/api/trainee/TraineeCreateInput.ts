import { InputJsonValue } from "../../types";

export type TraineeCreateInput = {
  dateOfJoining?: Date | null;
  email?: string | null;
  firstName?: string | null;
  labId?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  traineeAttendances?: InputJsonValue;
};
