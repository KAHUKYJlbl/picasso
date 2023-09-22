import { AppBar, Box, SvgIcon, Toolbar, Typography } from '@mui/material';
import { Svg } from '../../../shared/svg';

type LayoutProps = {
  children: JSX.Element,
};

export const Layout = ({children}: LayoutProps): JSX.Element => (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#99c1ff'}}>
        <Toolbar>
          <SvgIcon>
            <Svg />
          </SvgIcon>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 1 }}>
            PICASSO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    {children}
  </>
);
