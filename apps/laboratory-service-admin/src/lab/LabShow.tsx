import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LAB_TITLE_FIELD } from "./LabTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const LabShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Employee"
          target="labId"
          label="Employees"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateOfJoining" source="dateOfJoining" />
            <TextField label="email" source="email" />
            <TextField label="firstName" source="firstName" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Lab" source="lab.id" reference="Lab">
              <TextField source={LAB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="lastName" source="lastName" />
            <TextField label="phoneNumber" source="phoneNumber" />
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Trainee" target="labId" label="Trainees">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateOfJoining" source="dateOfJoining" />
            <TextField label="email" source="email" />
            <TextField label="firstName" source="firstName" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Lab" source="lab.id" reference="Lab">
              <TextField source={LAB_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="lastName" source="lastName" />
            <TextField label="phoneNumber" source="phoneNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
