import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route  } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => (
    <div>
        This is from my Dashboard Component
    </div>
)

const AddExpensePage = () => (
    <div>
        This is from my Add Expense Component
    </div>
)

const EditExpensePage = () => (
    <div>
        This is from my Edit Expense Component
    </div>
)

const HelpExpensePage = () => (
    <div>
        This is from my Help Expense Component
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ ExpenseDashBoardPage } exact={ true }/>
            <Route path="/create" component={ AddExpensePage } />
            <Route path="/edit" component={ EditExpensePage } />
            <Route path="/help" component={ HelpExpensePage } />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));