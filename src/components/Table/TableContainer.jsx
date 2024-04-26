import React from "react";
import EmployeeTable from "./EmployeeTable";
import { useGetEmployeeQuery } from "../../api/employeeApi";
import { Button } from "../ui/button";

const TableContainer = () => {
  const { data: getEmployeeData, isFetching: isEmployeeFetching, error: employeeError, refetch } = useGetEmployeeQuery();
  const handleRefetch = () => {
    refetch();
  };
  return (
    <div>
      <EmployeeTable getEmployeeData={getEmployeeData} />
      <Button onClick={handleRefetch}>Refetch</Button>
    </div>
  );
};

export default TableContainer;
