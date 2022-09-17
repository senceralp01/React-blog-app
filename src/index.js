import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css';
import configureStore from './store/configureStore'
import { addBlog, removeBlog, editBlog } from './actions/blogs';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState()); // sadece store içerisinde bir güncelleme olursa consola yazar.
})

const blog1 = store.dispatch(addBlog({title: 'Blog title 1', description: 'Blog description 1'}));
const blog2 = store.dispatch(addBlog({title: 'Blog title 2', description: 'Blog description 2', dateAdded: Date.now()}));
store.dispatch(removeBlog({id: blog1.blog.id}));
store.dispatch(editBlog(blog2.blog.id, { title: 'updated blog title', description: 'updated description' }))
store.dispatch(addBlog({title: 'Blog title 3', description: 'Blog description 3', dateAdded: Date.now()}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Provider store={store}><AppRouter /></Provider> );


reportWebVitals();
