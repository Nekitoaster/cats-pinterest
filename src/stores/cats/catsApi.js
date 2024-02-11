import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catsApi = createApi({
  reducerPath: "catsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.thecatapi.com/v1/images`,
  }),
  endpoints: (build) => ({
    getCats: build.query({
      query: () =>
        `search?limit=100&api_key=live_72FqxILLcsLZQPqE3IyqPB8bm1bylbL98XjSYwDjGDqqY7ByTwlDpdY9A6WfFu5K`,
    }),
  }),
});

export const { useGetCatsQuery } = catsApi;
