import { useEffect, useRef, useState } from 'react';
import { Box, List } from '@mui/material';

import { useVisible } from '../../../shared/lib/hooks/use-visible';
import { LoadingSpinner } from '../../../shared/ui/loading-spinner';
import { Post, PostType } from '../../../entities/post';
import { Oops } from '../../oops';

import { useGetPostsQuery } from '../model/posts-slice';
import { RefListElement } from '../lib/types';
import { useVirtual } from '../hooks/use-virtual';

const POSTS_QUANTITY = 10;

export const PostsList = (): JSX.Element => {
  const ref = useRef<HTMLLIElement>(null);
  const isFetching = useVisible(ref);
  const [ loadingPage, setLoadingPage ] = useState(1);

  const [ refList, setReflist ] = useState<RefListElement[]>([]);
  const currentPage = useVirtual(refList);

  const { data, error, isLoading } = useGetPostsQuery({ page: loadingPage, limit: POSTS_QUANTITY });
  const [ posts, setPosts ] = useState<PostType[]>([]);

  useEffect(() => {
    if (data) {

      console.log(currentPage);
      console.log(currentPage - 4 < 0 ? 0 : ( currentPage - 3 ) * 10 - 1 );
      console.log( currentPage * 10 > data.length ? data.length : currentPage * 10 );
      setPosts( data.slice(
        currentPage - 4 < 0 ? 0 : ( currentPage - 3 ) * 10 - 1 ,
        currentPage * 10 > data.length ? data.length : currentPage * 10
      ));
    }
  }, [data, currentPage]);

  useEffect(() => {
    if (ref.current) {
      setReflist((list) => [...list, {element: ref.current, page: loadingPage}]);
    }
  }, [data]);

  useEffect(() => {
    if (isFetching && data) {
      setLoadingPage((current) => current * POSTS_QUANTITY > data.length ? current : current + 1);
    };
  }, [isFetching]);

  if (!posts || isLoading) {
    return <LoadingSpinner spinnerType='page' />
  };

  if (error) {
    return <Oops type='error-boundary' />
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 'md' }}>
      <List>
        {
          posts.map((post, index, array) => (
            <Post
              key={post.id}
              post={post}
              ref={index + 1 === array.length ? ref : undefined}
            />
          ))
        }
      </List>
    </Box>
  );
};
