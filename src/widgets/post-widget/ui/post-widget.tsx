import { Box, Button, Grid } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import UndoSharpIcon from '@mui/icons-material/UndoSharp';

import { PostBig } from '../../../entities/post';
import { LoadingSpinner } from '../../../shared/ui/loading-spinner';
import { Oops } from '../../oops';
import { useGetPostByIdQuery } from '../../posts-list';


export const PostWidget = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetPostByIdQuery( Number(id) );

  if (!data || isLoading) {
    return <LoadingSpinner spinnerType='page' />
  };

  if (error || !id) {
    return <Oops type='error-boundary' />
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 'md' }}>
      <PostBig post={data} />

      <Grid container justifyContent='end' sx={{mt: '20px'}}>
        <Grid>
          <Button
            size="small"
            variant="contained"
            onClick={ () => navigate(-1) }
            endIcon={ <UndoSharpIcon /> }
          >
            Назад
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
