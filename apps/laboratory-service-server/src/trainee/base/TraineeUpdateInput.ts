/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LabWhereUniqueInput } from "../../lab/base/LabWhereUniqueInput";
import { TraineeAttendanceUpdateManyWithoutTraineesInput } from "./TraineeAttendanceUpdateManyWithoutTraineesInput";

@InputType()
class TraineeUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfJoining?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LabWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LabWhereUniqueInput)
  @IsOptional()
  @Field(() => LabWhereUniqueInput, {
    nullable: true,
  })
  lab?: LabWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => TraineeAttendanceUpdateManyWithoutTraineesInput,
  })
  @ValidateNested()
  @Type(() => TraineeAttendanceUpdateManyWithoutTraineesInput)
  @IsOptional()
  @Field(() => TraineeAttendanceUpdateManyWithoutTraineesInput, {
    nullable: true,
  })
  traineeAttendances?: TraineeAttendanceUpdateManyWithoutTraineesInput;
}

export { TraineeUpdateInput as TraineeUpdateInput };