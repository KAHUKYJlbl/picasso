import { forwardRef } from 'react';
import { ListItem, ListItemText } from '@mui/material';

import { PostType } from '..';

type PostProps = {
  post: PostType,
  page: string,
}

export const Post = forwardRef((props: PostProps, ref?: React.ForwardedRef<HTMLLIElement>): JSX.Element => {
  return (
    <ListItem sx={{dataPage: props.page}} ref={ref} component="li" disablePadding>
      <ListItemText primary={props.post.title} />
    </ListItem>
  )
});
