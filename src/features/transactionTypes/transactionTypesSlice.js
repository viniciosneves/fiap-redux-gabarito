import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  types: ['Depósito', 'Saque', 'Transferência']
};

const transactionTypesSlice = createSlice({
  name: 'transactionTypes',
  initialState
});

export default transactionTypesSlice.reducer;