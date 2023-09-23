import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { NameSpace } from '../../../app/provider/store';
import { PostType } from '../../../entities/post';

import { BASE_URL } from '../lib/const';
import { GetPostsArgType } from '../lib/types';

export const postsSlice = createApi({
  reducerPath: NameSpace.Posts,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], GetPostsArgType>({
      query: ({ page, limit }) => `?_limit=${limit * page}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsSlice;
