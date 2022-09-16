import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css';

import { createStore, combineReducers } from 'redux';

// State içerisinde tanımlanan farklı gruplar(blogs, auth) üzerinde yapacağımız değişiklikler farklı reducer'ların varlığıyla mümkün oluyor. Farklı reducer'lar store içerisinde combine edilir.
const state = {
    blogs: [
        {
            id: 1,
            title: 'Blog title 1',
            description: 'Bblog description 1',
            dateAdded: 0
        }
    ],
    auth: {
        userid: 1,
        username: 'senceralp',
        email: 'info@senceralp.com'
    }
}

const blogState = [];
const blogReducer = (state = blogState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const authState = {};
const authReducer = (state = authState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

// Tek bir store içerisine farklı reducer bilgilerini aktararak farklı state'ler oluşturuyoruz.
const store = createStore(
    combineReducers({
            blogs: blogReducer,
            auth: authReducer
    })
);

console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <AppRouter /> );


reportWebVitals();
