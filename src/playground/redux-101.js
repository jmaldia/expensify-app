import { createStore } from 'redux';

// Action generators

const increment = ({ incrementBy = 1 } = {}) =>  ({
    type: 'INCREMENT',
    incrementBy
});

const decrement = ({ decrementBy = 1 } = {}) =>  ({
    type: 'DECREMENT',
    decrementBy
});

const set = ({ count }) =>  ({
    type: 'SET',
    count
});

const reset = () =>  ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy 
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// increment the count
store.dispatch(increment({ incrementBy: 5 }));
store.dispatch(increment());
// decrement the count
store.dispatch(decrement({ decrementBy: 10 }));
// set to 0
store.dispatch(set({ count: 10 }));
// reset to 0
store.dispatch(reset());