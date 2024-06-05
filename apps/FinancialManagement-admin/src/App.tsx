import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { IncomeAndExpensesList } from "./incomeAndExpenses/IncomeAndExpensesList";
import { IncomeAndExpensesCreate } from "./incomeAndExpenses/IncomeAndExpensesCreate";
import { IncomeAndExpensesEdit } from "./incomeAndExpenses/IncomeAndExpensesEdit";
import { IncomeAndExpensesShow } from "./incomeAndExpenses/IncomeAndExpensesShow";
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
        title={"FinancialManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="IncomeAndExpenses"
          list={IncomeAndExpensesList}
          edit={IncomeAndExpensesEdit}
          create={IncomeAndExpensesCreate}
          show={IncomeAndExpensesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
