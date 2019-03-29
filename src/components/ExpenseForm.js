import React from 'react';

class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: 0,
        note: ''
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    
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