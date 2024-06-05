/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TraineeService } from "../trainee.service";
import { TraineeCreateInput } from "./TraineeCreateInput";
import { Trainee } from "./Trainee";
import { TraineeFindManyArgs } from "./TraineeFindManyArgs";
import { TraineeWhereUniqueInput } from "./TraineeWhereUniqueInput";
import { TraineeUpdateInput } from "./TraineeUpdateInput";
import { TraineeAttendanceFindManyArgs } from "../../traineeAttendance/base/TraineeAttendanceFindManyArgs";
import { TraineeAttendance } from "../../traineeAttendance/base/TraineeAttendance";
import { TraineeAttendanceWhereUniqueInput } from "../../traineeAttendance/base/TraineeAttendanceWhereUniqueInput";

export class TraineeControllerBase {
  constructor(protected readonly service: TraineeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trainee })
  async createTrainee(
    @common.Body() data: TraineeCreateInput
  ): Promise<Trainee> {
    return await this.service.createTrainee({
      data: {
        ...data,

        lab: data.lab
          ? {
              connect: data.lab,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dateOfJoining: true,
        email: true,
        firstName: true,
        id: true,

        lab: {
          select: {
            id: true,
          },
        },

        lastName: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Trainee] })
  @ApiNestedQuery(TraineeFindManyArgs)
  async trainees(@common.Req() request: Request): Promise<Trainee[]> {
    const args = plainToClass(TraineeFindManyArgs, request.query);
    return this.service.trainees({
      ...args,
      select: {
        createdAt: true,
        dateOfJoining: true,
        email: true,
        firstName: true,
        id: true,

        lab: {
          select: {
            id: true,
          },
        },

        lastName: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trainee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async trainee(
    @common.Param() params: TraineeWhereUniqueInput
  ): Promise<Trainee | null> {
    const result = await this.service.trainee({
      where: params,
      select: {
        createdAt: true,
        dateOfJoining: true,
        email: true,
        firstName: true,
        id: true,

        lab: {
          select: {
            id: true,
          },
        },

        lastName: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Trainee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTrainee(
    @common.Param() params: TraineeWhereUniqueInput,
    @common.Body() data: TraineeUpdateInput
  ): Promise<Trainee | null> {
    try {
      return await this.service.updateTrainee({
        where: params,
        data: {
          ...data,

          lab: data.lab
            ? {
                connect: data.lab,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dateOfJoining: true,
          email: true,
          firstName: true,
          id: true,

          lab: {
            select: {
              id: true,
            },
          },

          lastName: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Trainee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTrainee(
    @common.Param() params: TraineeWhereUniqueInput
  ): Promise<Trainee | null> {
    try {
      return await this.service.deleteTrainee({
        where: params,
        select: {
          createdAt: true,
          dateOfJoining: true,
          email: true,
          firstName: true,
          id: true,

          lab: {
            select: {
              id: true,
            },
          },

          lastName: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/traineeAttendances")
  @ApiNestedQuery(TraineeAttendanceFindManyArgs)
  async findTraineeAttendances(
    @common.Req() request: Request,
    @common.Param() params: TraineeWhereUniqueInput
  ): Promise<TraineeAttendance[]> {
    const query = plainToClass(TraineeAttendanceFindManyArgs, request.query);
    const results = await this.service.findTraineeAttendances(params.id, {
      ...query,
      select: {
        createdAt: true,
        date: true,
        id: true,
        status: true,

        trainee: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/traineeAttendances")
  async connectTraineeAttendances(
    @common.Param() params: TraineeWhereUniqueInput,
    @common.Body() body: TraineeAttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      traineeAttendances: {
        connect: body,
      },
    };
    await this.service.updateTrainee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/traineeAttendances")
  async updateTraineeAttendances(
    @common.Param() params: TraineeWhereUniqueInput,
    @common.Body() body: TraineeAttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      traineeAttendances: {
        set: body,
      },
    };
    await this.service.updateTrainee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/traineeAttendances")
  async disconnectTraineeAttendances(
    @common.Param() params: TraineeWhereUniqueInput,
    @common.Body() body: TraineeAttendanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      traineeAttendances: {
        disconnect: body,
      },
    };
    await this.service.updateTrainee({
      where: params,
      data,
      select: { id: true },
    });
  }
}