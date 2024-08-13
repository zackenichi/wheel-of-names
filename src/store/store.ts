import { configureStore } from '@reduxjs/toolkit';

import { EntryReducer } from '../features/entry';
import { WinnerReducer } from '../features/winner';

export const store = configureStore({
  reducer: {
    entry: EntryReducer,
    winner: WinnerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
