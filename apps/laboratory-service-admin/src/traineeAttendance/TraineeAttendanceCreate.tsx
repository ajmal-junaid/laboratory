import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { TraineeTitle } from "../trainee/TraineeTitle";

export const TraineeAttendanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="trainee.id" reference="Trainee" label="Trainee">
          <SelectInput optionText={TraineeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
