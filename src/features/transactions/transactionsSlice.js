import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactions: []
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            const { type, value } = action.payload;
            let adjustedValue = Math.abs(value);

            if (type === 'Saque' || type === 'Transferência') {
                adjustedValue = -Math.abs(value);
            }

            state.transactions.push({
                ...action.payload,
                value: adjustedValue,
                date: new Date().toISOString(),
                id: state.transactions.length + 1
            });
        }
    }
});


export const selectTransactions = createSelector(
    state => state.transactions.transactions,
    transactions => transactions.map(transaction => ({
        ...transaction,
        date: new Date(transaction.date)
    }))
);

export const selectCurrentBalance = createSelector(
    selectTransactions,
    transactions => transactions.reduce((balance, transaction) => balance + transaction.value, 0)
);

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;