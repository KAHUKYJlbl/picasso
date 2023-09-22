import { combineReducers } from '@reduxjs/toolkit';

import { postsSlice } from '../../../../widgets/posts-list';

export const rootReducer = combineReducers({
  [postsSlice.reducerPath]: postsSlice.reducer,
});
