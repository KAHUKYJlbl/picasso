import { forwardRef } from 'react';
import { ListItem, ListItemText } from '@mui/material';

import { PostType } from '..';

type PostProps = {
  post: PostType,
}

export const Post = forwardRef((props: PostProps, ref?: React.ForwardedRef<HTMLLIElement>): JSX.Element => {
  return (
    <ListItem sx={{height: '100px'}} ref={ref} component="li" disablePadding>
      <ListItemText primary={props.post.title + props.post.id} />
    </ListItem>
  )
});
