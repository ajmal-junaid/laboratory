/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Trainee } from "./Trainee";
import { TraineeCountArgs } from "./TraineeCountArgs";
import { TraineeFindManyArgs } from "./TraineeFindManyArgs";
import { TraineeFindUniqueArgs } from "./TraineeFindUniqueArgs";
import { CreateTraineeArgs } from "./CreateTraineeArgs";
import { UpdateTraineeArgs } from "./UpdateTraineeArgs";
import { DeleteTraineeArgs } from "./DeleteTraineeArgs";
import { TraineeService } from "../trainee.service";
@graphql.Resolver(() => Trainee)
export class TraineeResolverBase {
  constructor(protected readonly service: TraineeService) {}

  async _traineesMeta(
    @graphql.Args() args: TraineeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Trainee])
  async trainees(
    @graphql.Args() args: TraineeFindManyArgs
  ): Promise<Trainee[]> {
    return this.service.trainees(args);
  }

  @graphql.Query(() => Trainee, { nullable: true })
  async trainee(
    @graphql.Args() args: TraineeFindUniqueArgs
  ): Promise<Trainee | null> {
    const result = await this.service.trainee(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Trainee)
  async createTrainee(
    @graphql.Args() args: CreateTraineeArgs
  ): Promise<Trainee> {
    return await this.service.createTrainee({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Trainee)
  async updateTrainee(
    @graphql.Args() args: UpdateTraineeArgs
  ): Promise<Trainee | null> {
    try {
      return await this.service.updateTrainee({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Trainee)
  async deleteTrainee(
    @graphql.Args() args: DeleteTraineeArgs
  ): Promise<Trainee | null> {
    try {
      return await this.service.deleteTrainee(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}