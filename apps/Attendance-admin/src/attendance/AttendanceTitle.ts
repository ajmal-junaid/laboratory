import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "employeeId";

export const AttendanceTitle = (record: TAttendance): string => {
  return record.employeeId?.toString() || String(record.id);
};
