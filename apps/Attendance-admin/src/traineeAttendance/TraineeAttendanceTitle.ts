import { TraineeAttendance as TTraineeAttendance } from "../api/traineeAttendance/TraineeAttendance";

export const TRAINEEATTENDANCE_TITLE_FIELD = "traineeId";

export const TraineeAttendanceTitle = (record: TTraineeAttendance): string => {
  return record.traineeId?.toString() || String(record.id);
};
