import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LabCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <div />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Create>
  );
};
