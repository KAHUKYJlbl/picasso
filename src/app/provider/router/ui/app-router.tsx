import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { MainPage } from '../../../../pages/main-page';
import { PostPage } from '../../../../pages/post-page';
import { PostsPage } from '../../../../pages/posts-page';
import { NotFound } from '../../../../pages/not-found';

import { AppRoute } from '../lib/routes';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={AppRoute.Main}
        element={
          <MainPage />
        }
      />
      <Route
        path={AppRoute.Post}
        element={
          <PostPage />
        }
      />
      <Route
        path={AppRoute.Posts}
        element={
          <PostsPage />
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </>
  )
);
