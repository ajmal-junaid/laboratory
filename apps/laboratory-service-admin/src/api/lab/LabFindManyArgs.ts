import { LabWhereInput } from "./LabWhereInput";
import { LabOrderByInput } from "./LabOrderByInput";

export type LabFindManyArgs = {
  where?: LabWhereInput;
  orderBy?: Array<LabOrderByInput>;
  skip?: number;
  take?: number;
};
