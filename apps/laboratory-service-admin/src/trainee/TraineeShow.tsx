import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRAINEE_TITLE_FIELD } from "./TraineeTitle";
import { LAB_TITLE_FIELD } from "../lab/LabTitle";

export const TraineeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="TraineeAttendance"
          target="traineeId"
          label="TraineeAttendances"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="Trainee"
              source="trainee.id"
              reference="Trainee"
            >
              <TextField source={TRAINEE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
