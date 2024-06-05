import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { TraineeAttendanceList } from "./traineeAttendance/TraineeAttendanceList";
import { TraineeAttendanceCreate } from "./traineeAttendance/TraineeAttendanceCreate";
import { TraineeAttendanceEdit } from "./traineeAttendance/TraineeAttendanceEdit";
import { TraineeAttendanceShow } from "./traineeAttendance/TraineeAttendanceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Attendance"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="TraineeAttendance"
          list={TraineeAttendanceList}
          edit={TraineeAttendanceEdit}
          create={TraineeAttendanceCreate}
          show={TraineeAttendanceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
