import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: []
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push({
        ...action.payload,
        date: new Date(),
        id: state.transactions.length + 1
      });
    }
  }
});

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;