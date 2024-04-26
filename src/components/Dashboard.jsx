import React from "react";
import TableContainer from "./Table/TableContainer";
import EmployeeForm from "./Form/EmployeeForm";

const Dashboard = () => {
  return (
    <div>
      <div>Dashboard</div>
      <EmployeeForm />
      <TableContainer />
    </div>
  );
};

export default Dashboard;
