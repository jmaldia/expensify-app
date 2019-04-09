import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

// Redux Stuff
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate,  sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})


store.dispatch(addExpense({ description: 'Rent bill', note: 'Same as last month', amount: 10000, createdAt: 20000  }));
store.dispatch(addExpense({ description: 'Gas bill', note: 'Went up by $15', amount: 4500, createdAt: 152000 }));
store.dispatch(addExpense({ description: 'Water bill', note: 'Went down by $5', amount: 6000, createdAt: -152000 }));
// store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));