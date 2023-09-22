import { Navigate } from 'react-router-dom';

import { AppRoute } from '../../../app/provider/router';
import { Layout } from '../../../widgets/layout';
import { PostsList } from '../../../widgets/posts-list';

const PostsPage = (): JSX.Element => (
  <Layout>
    <PostsList />
  </Layout>
);

export default PostsPage;
