import { TraineeAttendance as TTraineeAttendance } from "../api/traineeAttendance/TraineeAttendance";

export const TRAINEEATTENDANCE_TITLE_FIELD = "id";

export const TraineeAttendanceTitle = (record: TTraineeAttendance): string => {
  return record.id?.toString() || String(record.id);
};
