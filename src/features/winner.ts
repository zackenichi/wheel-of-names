import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface WinnerState {
  //   winners: string[];
  newWinner: number;
  showWinner: boolean;
}

const initialState: WinnerState = {
  newWinner: 0,
  showWinner: false,
};

export const winnerSlice = createSlice({
  name: 'winner',
  initialState,
  reducers: {
    setNewWinner: (state, action: PayloadAction<number>) => {
      state.newWinner = action.payload;
    },
    setShowWinner: (state, action: PayloadAction<boolean>) => {
      state.showWinner = action.payload;
    },
  },
});

export const { setNewWinner, setShowWinner } = winnerSlice.actions;

const WinnerReducer = winnerSlice.reducer;

export { WinnerReducer };
