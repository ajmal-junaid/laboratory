import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { LabTitle } from "../lab/LabTitle";
import { RoleTitle } from "../role/RoleTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dateOfJoining" source="dateOfJoining" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <ReferenceInput source="lab.id" reference="Lab" label="Lab">
          <SelectInput optionText={LabTitle} />
        </ReferenceInput>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
