import { Employee } from "../employee/Employee";
import { Trainee } from "../trainee/Trainee";

export type Lab = {
  address: string | null;
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  name: string | null;
  trainees?: Array<Trainee>;
  updatedAt: Date;
};
