import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { FC, useState } from 'react';

const Controls: FC = () => {
  const [order, setOrder] = useState('asc');

  const changeOrder = () => {
    // toggle order sort
    setOrder(order === 'asc' ? 'desc' : 'asc');
    // change order
  };

  // if shuffle is clicked, shuffle the entries,
  // if sort is clicked, sort the entries
  // order is set via click events

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button startIcon={<ShuffleRoundedIcon />} variant="contained">
          Shuffle
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={changeOrder}
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

const Entries: FC = () => {
  // todo: use state for now, we will change to redux later
  // Initial value with 7 random names
  const initialValue = `Alice\nBob\nCharlie\nDavid\nEve\nFrank\nGrace`;

  const [inputValue, setInputValue] = useState(initialValue);
  const [stringArray, setStringArray] = useState(initialValue.split('\n'));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    const arrayOfStrings = value.split('\n'); // Split input by newlines
    setStringArray(arrayOfStrings);
  };

  // test

  console.log(stringArray);

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
            rows={8}
            fullWidth
            required
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export { Entries };
