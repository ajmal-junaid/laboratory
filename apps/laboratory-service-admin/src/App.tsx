import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LabList } from "./lab/LabList";
import { LabCreate } from "./lab/LabCreate";
import { LabEdit } from "./lab/LabEdit";
import { LabShow } from "./lab/LabShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { TraineeAttendanceList } from "./traineeAttendance/TraineeAttendanceList";
import { TraineeAttendanceCreate } from "./traineeAttendance/TraineeAttendanceCreate";
import { TraineeAttendanceEdit } from "./traineeAttendance/TraineeAttendanceEdit";
import { TraineeAttendanceShow } from "./traineeAttendance/TraineeAttendanceShow";
import { TraineeList } from "./trainee/TraineeList";
import { TraineeCreate } from "./trainee/TraineeCreate";
import { TraineeEdit } from "./trainee/TraineeEdit";
import { TraineeShow } from "./trainee/TraineeShow";
import { IncomeAndExpensesList } from "./incomeAndExpenses/IncomeAndExpensesList";
import { IncomeAndExpensesCreate } from "./incomeAndExpenses/IncomeAndExpensesCreate";
import { IncomeAndExpensesEdit } from "./incomeAndExpenses/IncomeAndExpensesEdit";
import { IncomeAndExpensesShow } from "./incomeAndExpenses/IncomeAndExpensesShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"LaboratoryService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Lab"
          list={LabList}
          edit={LabEdit}
          create={LabCreate}
          show={LabShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="TraineeAttendance"
          list={TraineeAttendanceList}
          edit={TraineeAttendanceEdit}
          create={TraineeAttendanceCreate}
          show={TraineeAttendanceShow}
        />
        <Resource
          name="Trainee"
          list={TraineeList}
          edit={TraineeEdit}
          create={TraineeCreate}
          show={TraineeShow}
        />
        <Resource
          name="IncomeAndExpenses"
          list={IncomeAndExpensesList}
          edit={IncomeAndExpensesEdit}
          create={IncomeAndExpensesCreate}
          show={IncomeAndExpensesShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
