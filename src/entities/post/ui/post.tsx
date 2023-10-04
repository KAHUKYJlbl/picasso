import { forwardRef } from 'react';
import { Link, generatePath } from 'react-router-dom';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { Box, Button, Card, CardActions, CardContent, ListItem, Typography } from '@mui/material';

import { AppRoute } from '../../../app/provider/router';

import { PostType } from '../lib/types';

type PostProps = {
  post: PostType,
}

export const Post = forwardRef((props: PostProps, ref?: React.ForwardedRef<HTMLLIElement>): JSX.Element => {

  return (
    <ListItem ref={ref} sx={{mb: '10px'}} component="li" disablePadding>
      <Box sx={{ minWidth: 300, width: '100%' }}>
        <Card variant="outlined" sx={{pr: '20px', pl: '20px'}}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.post.id}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              noWrap
            >
              {props.post.body}
            </Typography>
          </CardContent>

          <CardActions sx={{mb: '10px', justifyContent: 'end'}}>
            <Button
              size="small"
              variant="contained"
              component={Link}
              to={ generatePath( AppRoute.Post, { id: props.post.id.toString() } ) }
              endIcon={<AddSharpIcon />}
            >
              Просмотр
            </Button>
          </CardActions>
        </Card>
      </Box>
    </ListItem>
  );
});
