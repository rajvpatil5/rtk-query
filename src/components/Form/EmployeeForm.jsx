import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { useAddEmployeeMutation, useUpdateEmployeeMutation } from "../../api/employeeApi";

const formSchema = z.object({
  id: z.string().min(1, {
    message: "Id must be at least 1 characters.",
  }),
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

const EmployeeForm = () => {
  const [addEmployee] = useAddEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    addEmployee({
      id: 8,
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
    });
    console.log({ firstName: values.firstname, lastName: values.lastname, email: values.email });
    console.log(values);
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("first", {
      id: form.getValues().id,
      firstName: form.getValues().firstname,
      lastName: form.getValues().lastname,
      email: form.getValues().email,
    });

    updateEmployee({
      id: form.getValues().id,
      firstName: form.getValues().firstname,
      lastName: form.getValues().lastname,
      email: form.getValues().email,
    });
  };
  return (
    <div className="w-[50%]  my-10 border">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-left">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Id</FormLabel>
                <FormControl>
                  <Input placeholder="Id" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mr-4">
            Submit
          </Button>
          <Button onClick={handleUpdate}>Update</Button>
        </form>
      </Form>
    </div>
  );
};

export default EmployeeForm;
