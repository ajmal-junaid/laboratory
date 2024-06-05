import { Lab as TLab } from "../api/lab/Lab";

export const LAB_TITLE_FIELD = "name";

export const LabTitle = (record: TLab): string => {
  return record.name?.toString() || String(record.id);
};
