import { Box, Card, CardContent, Typography } from '@mui/material'

import { PostType } from '../lib/types';

type PostBigProps = {
  post: PostType;
}

export const PostBig = ({ post }: PostBigProps): JSX.Element => {
  return (
    <Box sx={{ minWidth: 300 }}>
        <Card variant="outlined" sx={{pr: '20px', pl: '20px'}}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {post.id}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      </Box>
  )
}
