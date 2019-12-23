const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// Define a callback function that increments count
const incrementCount = () => {
    count += 1;
}

// Use Redux's listener function to read updates to store
store.subscribe(incrementCount);

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);