import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../../../../shared/api/api';
import { rootReducer } from '../model/root-reducer';
import { postsSlice } from '../../../../widgets/posts-list';

export const axios = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsSlice.middleware),
});
