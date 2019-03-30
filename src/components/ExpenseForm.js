import React from 'react';

import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
const now = moment();

console.log(now.format('MMM do, YYYY'));

class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: 0,
        note: '',
        createdAt: moment(),
        calendarFocused: false
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    }

    onFocusedChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={ this.state.description }
                        onChange={ this.onDescriptionChange }
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={ this.state.amount }
                        onChange={ this.onAmountChange }
                    />
                    <SingleDatePicker
                        date={ this.state.createdAt }
                        onDateChange={ this.onDateChange }
                        focused={ this.state.calendarFocused }
                        onFocusChange={ this.onFocusedChange }
                        numberOfMonths={ 1 }
                        isOutsideRange={ () => false }
                    />
                    <textarea
                        placeholder="Add a note for your expense"
                        value={ this.state.note }
                        onChange={ this.onNoteChange }
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;