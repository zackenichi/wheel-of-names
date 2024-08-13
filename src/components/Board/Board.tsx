import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Entries } from '../Entries';
import { Wheel } from '../Wheel';

const Board: FC = () => {
  return (
    <Box
      sx={{
        maxHeight: 'calc(100vh - 64px)',
        marginTop: '20px',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Wheel />
        </Grid>
        <Grid item xs={12} md={4}>
          <Entries />
        </Grid>
      </Grid>
    </Box>
  );
};

export { Board };
