import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { NameSpace } from '../../../app/provider/store';
import { PostType } from '../../../entities/post';

import { BASE_URL } from '../lib/const';
import { GetPostsArgType } from '../lib/types';

export const postsSlice = createApi({
  reducerPath: NameSpace.Posts,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<{apiResponse: PostType[], totalCount: number}, GetPostsArgType>({
      query: ({ firstElement, quantity }) => `?_start=${firstElement}&_limit=${quantity}`,
      transformResponse(apiResponse: PostType[], meta) {
        return { apiResponse, totalCount: Number(meta?.response?.headers.get('X-Total-Count')) }
      }
    }),
  }),
});

export const { useGetPostsQuery } = postsSlice;
