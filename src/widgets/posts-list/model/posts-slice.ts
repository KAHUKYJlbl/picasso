import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { NameSpace } from '../../../app/provider/store';
import { Post } from '../../../entities/post';

import { BASE_URL } from '../lib/const';

export const postsSlice = createApi({
  reducerPath: NameSpace.Posts,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: (limit) => `?_limit=${limit}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsSlice;
