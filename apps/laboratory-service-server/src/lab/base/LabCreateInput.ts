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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { EmployeeCreateNestedManyWithoutLabsInput } from "./EmployeeCreateNestedManyWithoutLabsInput";
import { Type } from "class-transformer";
import { TraineeCreateNestedManyWithoutLabsInput } from "./TraineeCreateNestedManyWithoutLabsInput";

@InputType()
class LabCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeCreateNestedManyWithoutLabsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeCreateNestedManyWithoutLabsInput)
  @IsOptional()
  @Field(() => EmployeeCreateNestedManyWithoutLabsInput, {
    nullable: true,
  })
  employees?: EmployeeCreateNestedManyWithoutLabsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TraineeCreateNestedManyWithoutLabsInput,
  })
  @ValidateNested()
  @Type(() => TraineeCreateNestedManyWithoutLabsInput)
  @IsOptional()
  @Field(() => TraineeCreateNestedManyWithoutLabsInput, {
    nullable: true,
  })
  trainees?: TraineeCreateNestedManyWithoutLabsInput;
}

export { LabCreateInput as LabCreateInput };