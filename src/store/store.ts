import { configureStore } from '@reduxjs/toolkit';

import { EntryReducer } from '../features/entry';

export const store = configureStore({
  reducer: {
    entry: EntryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
