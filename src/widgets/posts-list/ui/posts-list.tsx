import { LoadingSpinner } from '../../../shared/ui/loading-spinner'
import { Oops } from '../../oops'
import { useGetPostsQuery } from '../model/posts-slice'

export const PostsList = (): JSX.Element => {
  const { data, error, isLoading } = useGetPostsQuery('10')

  if (!data || isLoading) {
    return <LoadingSpinner spinnerType='page' />
  }

  if (error) {
    return <Oops type='error-boundary' />
  }

  return (
    <div>
      {
        data.map((post) => (
          <div key={post.id}>{post.body}</div>
        ))
      }
    </div>
  );
};
