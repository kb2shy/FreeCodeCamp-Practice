const reducer = (state = 5) => {
    return state;
}

const store = Redux.createStore(reducer);

let currentState = store.getState();

// defining a Redux action
const action = {
    type: "LOGIN"
}

// Defining an action creator
const actionCreator = () => {
    return action;
}

// Dispatch the action
store.dispatch(actionCreator());
store.dispatch({type: 'LOGIN'});