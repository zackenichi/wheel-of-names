import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useIsSmallScreen } from '../../hooks/useIsSmallScreen';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setShowWinner } from '../../features/winner';
import { removeEntry } from '../../features/entry';

const WinnerModal: FC = () => {
  const isMobile = useIsSmallScreen();
  const dispatch = useDispatch();

  const showWinner = useSelector((state: RootState) => state.winner.showWinner);
  const newWinner = useSelector((state: RootState) => state.winner.newWinner);
  const entries = useSelector((state: RootState) => state.entry.entries);

  const handleClose = () => {
    dispatch(setShowWinner(false));
  };

  const handleRemove = () => {
    dispatch(removeEntry(newWinner));
    handleClose();
  };

  return (
    <Modal open={showWinner}>
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: isMobile ? '20%' : '30%',
          left: isMobile ? '0%' : '30%',
          // transform: 'translate(-50%, -50%)',
          width: isMobile ? '100vw' : '40vw',
          bgcolor: '#FFFFFF',
          boxShadow: 24,
          borderRadius: 4,
          p: 4,
          height: isMobile ? 'auto' : 'auto',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <Typography variant="h3"> We have a winner!</Typography>
          </Grid>
          <Grid item xs={2} textAlign="right">
            <IconButton onClick={handleClose}>
              <CloseRoundedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ color: '#980BFF' }}>
              {entries[newWinner]}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" fullWidth onClick={handleClose}>
              Close
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth onClick={handleRemove}>
              Remove
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export { WinnerModal };
