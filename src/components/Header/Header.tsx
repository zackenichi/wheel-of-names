import { AppBar, Grid, Typography } from '@mui/material';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h1">Randomizer</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export { Header };
