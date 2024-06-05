import { EmployeeCreateNestedManyWithoutLabsInput } from "./EmployeeCreateNestedManyWithoutLabsInput";
import { TraineeCreateNestedManyWithoutLabsInput } from "./TraineeCreateNestedManyWithoutLabsInput";

export type LabCreateInput = {
  address?: string | null;
  employees?: EmployeeCreateNestedManyWithoutLabsInput;
  name?: string | null;
  trainees?: TraineeCreateNestedManyWithoutLabsInput;
};
