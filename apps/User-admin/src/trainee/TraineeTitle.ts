import { Trainee as TTrainee } from "../api/trainee/Trainee";

export const TRAINEE_TITLE_FIELD = "firstName";

export const TraineeTitle = (record: TTrainee): string => {
  return record.firstName?.toString() || String(record.id);
};
