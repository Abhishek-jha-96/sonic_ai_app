import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_SERVER_BASE_URL,
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({

    // -----------------------
    // CREATE USER (POST)
    // -----------------------
    createUser: build.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    // -----------------------
    // GET USER DETAILS (GET)
    // -----------------------
    getUserById: build.query({
      query: (id) => `/user/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

  }),
});

export const {
  useCreateUserMutation,
  useGetUserByIdQuery,
} = userApi;
