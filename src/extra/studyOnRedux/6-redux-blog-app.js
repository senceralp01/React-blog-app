import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css';

import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';


//ACTION CREATOR
// Obje içerisinde bilgi gönderilmeme durumuna karşın {title='', description='', dateAdded=0} varsayılan değerler olarak atandı. 
const addBlog = ({title='', description='', dateAdded=0}) => ({
    type: "ADD_BLOG",
    blog: {
        id: uuid(), //Benzersiz bir ID üretir.
        title: title,
        description: description,
        dateAdded: dateAdded
    }
})

const removeBlog = ({ id }) => (
    {
        type: "REMOVE_BLOG",
        id: id
    }
)


const blogState = [];
const blogReducer = (state = blogState, action) => {
    switch(action.type) {
        case "ADD_BLOG":
            return [
                ...state,
                action.blog
            ]
        case "REMOVE_BLOG":
            return state.filter(({ id }) => {
                return id !== action.id;
            })
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

store.subscribe(() => {
    console.log(store.getState());
})

const blog1 = store.dispatch(addBlog({title: 'Blog title 1', description: 'Blog description 1'}));
const blog2 = store.dispatch(addBlog({title: 'Blog title 2', description: 'Blog description 2', dateAdded: Date.now()}));
store.dispatch(removeBlog({id: blog1.blog.id}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <AppRouter /> );


reportWebVitals();
