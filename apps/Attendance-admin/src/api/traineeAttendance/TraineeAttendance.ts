export type TraineeAttendance = {
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  traineeId: string | null;
  updatedAt: Date;
};
