import { AppBar, Box, Container, SvgIcon, Toolbar, Typography } from '@mui/material';
import { Svg } from '../../../shared/svg';

type LayoutProps = {
  children: JSX.Element,
};

export const Layout = ({children}: LayoutProps): JSX.Element => (
  <>
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" sx={{backgroundColor: '#99c1ff'}}>
        <Container maxWidth='md'>
          <Toolbar>
            <SvgIcon>
              <Svg />
            </SvgIcon>

            <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 1 }}>
              PICASSO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>

    <Container maxWidth='md' sx={{height: '87vh'}}>
      {children}
    </Container>
  </>
);
