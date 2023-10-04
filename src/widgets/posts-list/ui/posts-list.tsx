import { useEffect, useRef, useState } from 'react';
import { Box, List } from '@mui/material';

import { useVisible } from '../../../shared/lib/hooks/use-visible';
import { LoadingSpinner } from '../../../shared/ui/loading-spinner';
import { Post } from '../../../entities/post';
import { Oops } from '../../oops';

import { useGetPostsQuery } from '../model/posts-slice';
import { POSTS_PER_PAGE, SHOWN_PAGES } from '../lib/const';

export const PostsList = (): JSX.Element => {
  const upRef = useRef<HTMLLIElement>(null);
  const downRef = useRef<HTMLLIElement>(null);
  const scrollDirection = useVisible(upRef, downRef);
  const [ currentPage, setCurrentPage ] = useState(1);
  const { data, error, isLoading } = useGetPostsQuery({
    firstElement: ( (currentPage - 1) * POSTS_PER_PAGE ),
    quantity: SHOWN_PAGES * POSTS_PER_PAGE,
  });

  useEffect(() => {
    if (scrollDirection && data) {
      setCurrentPage( (current) => {
        return scrollDirection === 'up'
        ? ( current - 1 <= 0 ? current : current - 1 )
        : ( ( current + 1 ) * POSTS_PER_PAGE >= data.totalCount ? current : current + 1 )
      }
      );
    };
  }, [scrollDirection]);

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
          data.apiResponse.map((post, index, array) => (
            <Post
              key={post.id}
              post={post}
              ref={
                index + 1 === array.length
                ? downRef
                : index === 0
                  ? upRef
                  : undefined
              }
            />
          ))
        }
      </List>
    </Box>
  );
};
