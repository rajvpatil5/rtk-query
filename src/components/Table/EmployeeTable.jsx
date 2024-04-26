/* eslint-disable react/prop-types */
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { useDeleteEmployeeMutation } from "../../api/employeeApi";

const EmployeeTable = (props) => {
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const handleDelete = (employee) => {
    deleteEmployee(employee.id);
    console.log(employee);
  };
  console.log(props.getEmployeeData);
  return (
    <>
      {props.getEmployeeData && (
        <Table className="border">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Id</TableHead>
              <TableHead className="text-center">First Name</TableHead>
              <TableHead className="text-center">Last Name</TableHead>
              <TableHead className="text-right">Email</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.getEmployeeData.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">{employee.id}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell className="text-right">{employee.email}</TableCell>
                <TableCell className="text-right">
                  <Button onClick={() => handleDelete(employee)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default EmployeeTable;
