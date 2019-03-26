import { createStore, combineReducers } from 'redux';


// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer =(state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined, 
    endDate: undefined
};
const filtersReducer =(state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: '123abc',
        description: 'Jan Rent',
        note: 'Final payment for address',
        amount: 54500, // in pennies
        createdAt:0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined, 
        endDate: undefined
    }
}