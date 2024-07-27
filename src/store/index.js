import { configureStore } from '@reduxjs/toolkit';
import transactionTypesReducer from '../features/transactionTypes/transactionTypesSlice';

const store = configureStore({
  reducer: {
    transactionTypes: transactionTypesReducer
  }
});

export default store;