import { EmployeeUpdateManyWithoutLabsInput } from "./EmployeeUpdateManyWithoutLabsInput";
import { TraineeUpdateManyWithoutLabsInput } from "./TraineeUpdateManyWithoutLabsInput";

export type LabUpdateInput = {
  address?: string | null;
  employees?: EmployeeUpdateManyWithoutLabsInput;
  name?: string | null;
  trainees?: TraineeUpdateManyWithoutLabsInput;
};
