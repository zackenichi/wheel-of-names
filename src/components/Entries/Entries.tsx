import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  shuffleEntries,
  sortEntries,
  toggleOrder,
  updateEntries,
} from '../../features/entry';
import { RootState } from '../../store/store';

const Controls: FC = () => {
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.entry.order);

  const handleOrderChange = () => {
    dispatch(toggleOrder()); // Toggle order first
    dispatch(sortEntries()); // Then sort entries
  };

  const handleShuffle = () => {
    dispatch(shuffleEntries());
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          startIcon={<ShuffleRoundedIcon />}
          variant="contained"
          onClick={handleShuffle}
        >
          Shuffle
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={handleOrderChange}
          startIcon={
            order === 'asc' ? (
              <ArrowUpwardRoundedIcon />
            ) : (
              <ArrowDownwardRoundedIcon />
            )
          }
          variant="contained"
        >
          Sort
        </Button>
      </Grid>
    </Grid>
  );
};

export default Controls;

const Entries: FC = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state: RootState) => state.entry.entries);

  // Handle changes to the TextField input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const arrayOfStrings = value.split('\n'); // Split input by newlines
    dispatch(updateEntries(arrayOfStrings)); // Update Redux state
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Entries</Typography>
        </Grid>
        <Grid item xs={12}>
          <Controls />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            id="message"
            //   label="Message"
            variant="outlined"
            multiline
            rows={20}
            fullWidth
            required
            value={entries.join('\n')} // Join entries with newlines for display
            onChange={handleInputChange} // Update state on input change
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export { Entries };
