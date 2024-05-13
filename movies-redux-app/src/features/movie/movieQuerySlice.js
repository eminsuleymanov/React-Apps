import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://localhost:3000/";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    //get all
    getMovies: builder.query({
      query: () => `movies`,
    
    }),
    getMovie: builder.query({
      query: (id) => `movies/${id}`,
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `movie/${id}`,
        method: "DELETE",
      }),
    }),
    postMovie: builder.mutation({
      query: (newMovie) => ({
        url: "movies",
        body: newMovie,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    patchMovie: builder.mutation({
        query: (id, updatedMovie) => ({
          url: `movies/${id}`,
          body: updatedMovie,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      }),
  }),
});

export const {
    useGetMoviesQuery,
    useGetMovieQuery,
    useDeleteMovieMutation,
    usePatchMovieMutation,
    usePostMovieMutation
} = movieApi