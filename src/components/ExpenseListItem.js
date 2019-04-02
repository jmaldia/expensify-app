import React from 'react';

import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, note, createdAt }) => (
    <div>
        <Link to={ `/edit/${id}` }>
            <h3>{ description }</h3>
        </Link>
        <p>Amount: ${ amount/100 }</p>
        <p>Note: { note }</p>
        <p>Date: { createdAt }</p>
    </div>
);

export default ExpenseListItem;