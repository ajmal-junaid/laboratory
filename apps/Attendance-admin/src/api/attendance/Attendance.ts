export type Attendance = {
  createdAt: Date;
  date: Date | null;
  employeeId: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
