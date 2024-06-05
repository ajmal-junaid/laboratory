import { InputJsonValue } from "../../types";

export type LabCreateInput = {
  address?: string | null;
  employees?: InputJsonValue;
  name?: string | null;
  trainees?: InputJsonValue;
};
