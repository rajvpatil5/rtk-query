import { apiSlice } from "./apiSlice";
import { API_URIS, HTTP_METHODS } from "./utils/apiConstants";

export const extendedEmployeeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: () => ({
        url: API_URIS.EMPLOYEE_LIST,
      }),
      providesTags: ["Employees"],
    }),
    addEmployee: builder.mutation({
      query: (empBody) => ({
        url: API_URIS.EMPLOYEE_LIST,
        method: HTTP_METHODS.POST,
        body: empBody,
      }),
      invalidatesTags: (result, error, arg) => {
        console.log(result, error, arg);
        return ["Employees"];
      },
    }),
    updateEmployee: builder.mutation({
      query: (empBody) => ({
        url: API_URIS.EMPLOYEE_LIST_BY_ID.replace("{id}", empBody.id),
        method: HTTP_METHODS.PUT,
        body: empBody,
      }),
      invalidatesTags: ["Employees"],
    }),
    deleteEmployee: builder.mutation({
      query: (empid) => ({
        url: API_URIS.EMPLOYEE_LIST_BY_ID.replace("{id}", empid),
        method: HTTP_METHODS.DELETE,
      }),
      invalidatesTags: ["Employees"],
    }),
  }),
});

export const { useGetEmployeeQuery, useAddEmployeeMutation, useUpdateEmployeeMutation, useDeleteEmployeeMutation } = extendedEmployeeApiSlice;
