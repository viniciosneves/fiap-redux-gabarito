import { configureStore } from '@reduxjs/toolkit';
import transactionTypesReducer from '../features/transactionTypes/transactionTypesSlice';
import transactionsReducer from '../features/transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    transactionTypes: transactionTypesReducer,
    transactions: transactionsReducer,
  }
});

export default store;