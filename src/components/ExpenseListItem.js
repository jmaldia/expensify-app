import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, note, createdAt }) => (
    <div>
        <Link to={ `/edit/${id}` }>
            <h3>{ description }</h3>
        </Link>
        <p>Amount: ${ amount/100 }</p>
        <p>Note: { note }</p>
        <p>Date: { createdAt }</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);