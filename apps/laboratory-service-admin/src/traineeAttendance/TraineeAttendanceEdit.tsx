import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TraineeTitle } from "../trainee/TraineeTitle";

export const TraineeAttendanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
