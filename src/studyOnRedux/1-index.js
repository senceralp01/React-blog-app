import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css';

import { createStore } from 'redux';

const initialState = {
    count: 10
}

//store
const store = createStore(( state = initialState ) => {
    console.log("created store");
    return state
});

//get store
console.log(store.getState());

// INCREMENT, DECREMENT, RESET => ACTIONS (Object)

// DISPATCH

// REDUCERS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <AppRouter /> );


reportWebVitals();
