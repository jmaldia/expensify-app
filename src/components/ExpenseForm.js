import React from 'react';

import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

// const date = new Date();
const now = moment();

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : 0,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
            addOrEdit: props.addOrEdit
        };
    }

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
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusedChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Description and Amount are required. Please add before submitting.'}))
        } else {
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    
    render() {
        return (
            <div>
                { 
                    this.state.error && <div>{ this.state.error }</div>
                }
                <form onSubmit={ this.onSubmit }>
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
                    <button>{ this.state.addOrEdit === 'add' ? 'Add Expense' : 'Save' }</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;