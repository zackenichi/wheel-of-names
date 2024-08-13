import { AppBar, Grid, Typography } from '@mui/material';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <AppBar position="fixed" elevation={0}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h1">Randomizer</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export { Header };
