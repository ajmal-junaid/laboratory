/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  TraineeAttendance as PrismaTraineeAttendance,
  Trainee as PrismaTrainee,
} from "@prisma/client";

export class TraineeAttendanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TraineeAttendanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.traineeAttendance.count(args);
  }

  async traineeAttendances<T extends Prisma.TraineeAttendanceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TraineeAttendanceFindManyArgs>
  ): Promise<PrismaTraineeAttendance[]> {
    return this.prisma.traineeAttendance.findMany<Prisma.TraineeAttendanceFindManyArgs>(
      args
    );
  }
  async traineeAttendance<T extends Prisma.TraineeAttendanceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TraineeAttendanceFindUniqueArgs>
  ): Promise<PrismaTraineeAttendance | null> {
    return this.prisma.traineeAttendance.findUnique(args);
  }
  async createTraineeAttendance<T extends Prisma.TraineeAttendanceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TraineeAttendanceCreateArgs>
  ): Promise<PrismaTraineeAttendance> {
    return this.prisma.traineeAttendance.create<T>(args);
  }
  async updateTraineeAttendance<T extends Prisma.TraineeAttendanceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TraineeAttendanceUpdateArgs>
  ): Promise<PrismaTraineeAttendance> {
    return this.prisma.traineeAttendance.update<T>(args);
  }
  async deleteTraineeAttendance<T extends Prisma.TraineeAttendanceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TraineeAttendanceDeleteArgs>
  ): Promise<PrismaTraineeAttendance> {
    return this.prisma.traineeAttendance.delete(args);
  }

  async getTrainee(parentId: string): Promise<PrismaTrainee | null> {
    return this.prisma.traineeAttendance
      .findUnique({
        where: { id: parentId },
      })
      .trainee();
  }
}
