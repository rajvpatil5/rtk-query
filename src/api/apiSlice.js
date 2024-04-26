import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, defaultHeaders } from "./utils/apiConfiguration";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  prepareHeaders: (headers) => {
    headers.set();

    //Setting default headers
    for (const key in defaultHeaders) {
      headers.set(key, defaultHeaders[key]);
    }

    return headers;
  },
  endpoints: () => ({}),
});
