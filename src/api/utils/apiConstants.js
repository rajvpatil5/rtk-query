export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
};

export const OPERATION_STATUS = {
  SUCCESS: 0,
  FAILURE: 1,
  NETWORK_NOT_REACHABLE: 3,
  NOT_FOUND: 4,
};

export const API_URIS = {
  //Employee
  EMPLOYEE_LIST: "/api/employee",
  EMPLOYEE_LIST_BY_ID: "/api/employee/{id}",
};
