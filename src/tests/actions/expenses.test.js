import { 
    addExpense, 
    editExpense, 
    removeExpense 
} from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set up edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note Value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc', 
        updates: { note: 'New note Value' }
    })
});

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1095000,
        createdAt: 1000,
        note: 'This was last month\'s rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense({description: ''});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    });
});