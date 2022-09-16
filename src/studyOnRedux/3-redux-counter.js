import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css';

import { createStore } from 'redux';

const initialState = {
    count: 0
}

// REDUCERS
// Reducer'ı ayrı bir yerde tanımlamamızın sebebi store içerisine farklı reducer'lar göndermek. Örneğin:
// BLOK reducer
// LOGIN reducer (auth => username, isLogged)
const counterReducer = ( state = initialState, action ) => {
    switch (action.type){
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state
    }        
}

//store
const store = createStore(counterReducer);

//get store
// console.log(store.getState());

store.subscribe(() => { // Her defasında değil yalnızca state üzerinde bir değişiklik olduğunda çalışır.
    console.log(store.getState());
})

// INCREMENT, DECREMENT, RESET => ACTIONS (Object)
store.dispatch({
    type: "INCREMENT",
    incrementBy: 10
});

store.dispatch({
    type: "INCREMENT"
});

store.dispatch({
    type: "RESET"
});


// DISPATCH


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <AppRouter /> );


reportWebVitals();
