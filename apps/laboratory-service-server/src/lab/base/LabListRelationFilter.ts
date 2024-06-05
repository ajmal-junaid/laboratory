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
import { LabWhereInput } from "./LabWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LabListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LabWhereInput,
  })
  @ValidateNested()
  @Type(() => LabWhereInput)
  @IsOptional()
  @Field(() => LabWhereInput, {
    nullable: true,
  })
  every?: LabWhereInput;

  @ApiProperty({
    required: false,
    type: () => LabWhereInput,
  })
  @ValidateNested()
  @Type(() => LabWhereInput)
  @IsOptional()
  @Field(() => LabWhereInput, {
    nullable: true,
  })
  some?: LabWhereInput;

  @ApiProperty({
    required: false,
    type: () => LabWhereInput,
  })
  @ValidateNested()
  @Type(() => LabWhereInput)
  @IsOptional()
  @Field(() => LabWhereInput, {
    nullable: true,
  })
  none?: LabWhereInput;
}
export { LabListRelationFilter as LabListRelationFilter };