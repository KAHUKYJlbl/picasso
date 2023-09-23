import { useEffect, useRef, useState } from 'react';
import { Box, List } from '@mui/material';

import { useVisible } from '../../../shared/lib/hooks/use-visible';
import { LoadingSpinner } from '../../../shared/ui/loading-spinner';
import { Post } from '../../../entities/post';
import { Oops } from '../../oops';

import { useGetPostsQuery } from '../model/posts-slice';

const POSTS_QUANTITY = 10;

export const PostsList = (): JSX.Element => {
  const ref = useRef<HTMLLIElement>(null);
  const isFetching = useVisible(ref);
  const [ currentPage, setCurrentPage ] = useState(1);
  const { data, error, isLoading } = useGetPostsQuery({ page: currentPage, limit: POSTS_QUANTITY });

  useEffect(() => {
    if (isFetching) {
      setCurrentPage((current) => current + 1);
    };
  }, [isFetching]);

  if (!data || isLoading) {
    return <LoadingSpinner spinnerType='page' />
  };

  if (error) {
    return <Oops type='error-boundary' />
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 'md' }}>
      <List>
        {
          data.map((post, index) => (
            <Post
              key={post.id}
              post={post}
              page={currentPage.toString()}
              ref={index + 1 === POSTS_QUANTITY * currentPage ? ref : undefined}
            />
          ))
        }
      </List>
    </Box>
  );
};
