import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Editing Expense #{ props.match.params.id } right now.
        </div>
    )
}

export default EditExpensePage;