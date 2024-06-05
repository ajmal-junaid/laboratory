import { InputJsonValue } from "../../types";

export type LabUpdateInput = {
  address?: string | null;
  employees?: InputJsonValue;
  name?: string | null;
  trainees?: InputJsonValue;
};
