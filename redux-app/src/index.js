import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    createStore
} from 'redux';


// ACTIONS

const increment = () => {
    return {
        type: "INCREMENT"
    }
}
const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

// REDUCER

const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
}

let store = createStore(counter);


store.subscribe(() => console.log(store.getState()))

store.dispatch(increment());

ReactDOM.render( < App / > , document.getElementById('root'));