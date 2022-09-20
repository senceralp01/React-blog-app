import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css';
import configureStore from './store/configureStore'
import { getBlogsFromDatabase } from './actions/blogs';
import './firebase/firebaseConfig'

const store = configureStore();

const result = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<p>Loading...</p>);

store.dispatch(getBlogsFromDatabase()).then(() => {
    root.render(result);
});


reportWebVitals();
