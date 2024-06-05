import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LabTitle } from "../lab/LabTitle";
import { TraineeAttendanceTitle } from "../traineeAttendance/TraineeAttendanceTitle";

export const TraineeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateOfJoining" source="dateOfJoining" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <ReferenceInput source="lab.id" reference="Lab" label="Lab">
          <SelectInput optionText={LabTitle} />
        </ReferenceInput>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="traineeAttendances"
          reference="TraineeAttendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TraineeAttendanceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
