import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { Entries } from '../Entries';
import { Roulette } from '../Roulette';
import { WinnerModal } from '../WinnerModal';

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
          <Roulette />
        </Grid>
        <Grid item xs={12} md={4}>
          <Entries />
        </Grid>
      </Grid>
      <WinnerModal />
    </Box>
  );
};

export { Board };
