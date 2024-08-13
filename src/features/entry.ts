import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface EntryState {
  order: 'asc' | 'desc';
  entries: string[];
}

const initialState: EntryState = {
  order: 'asc',
  entries: ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'],
};

export const entrySlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    toggleOrder: (state) => {
      state.order = state.order === 'asc' ? 'desc' : 'asc';
    },
    // Replace the entire list of entries
    updateEntries: (state, action: PayloadAction<string[]>) => {
      state.entries = action.payload;
    },
    shuffleEntries: (state) => {
      state.entries = state.entries
        .filter((entry) => entry.trim() !== '') // Remove blank entries
        .map((value) => ({ value, sort: Math.random() })) // Assign random sort values
        .sort((a, b) => a.sort - b.sort) // Sort by random values
        .map(({ value }) => value); // Extract values
    },
    sortEntries: (state) => {
      const { order } = state;
      state.entries = state.entries.sort((a, b) => {
        if (a < b) return order === 'asc' ? -1 : 1;
        if (a > b) return order === 'asc' ? 1 : -1;
        return 0;
      });
    },
  },
});

export const { toggleOrder, updateEntries, shuffleEntries, sortEntries } =
  entrySlice.actions;

const EntryReducer = entrySlice.reducer;

export { EntryReducer };
