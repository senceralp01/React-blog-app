import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css';
import configureStore from './store/configureStore';
import { getBlogsFromDatabase } from './actions/blogs';
import Loader from './components/Loader';
// import './firebase/firebaseConfig';
import { firebase } from './firebase/firebaseConfig';

const store = configureStore();

const result = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Loader />);

store.dispatch(getBlogsFromDatabase()).then(() => {
    setTimeout(() => {
        root.render(result);
    }, 2000);
});

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log("Kullanıcı giriş yamıştır.");
        console.log(user);
    }else {
        console.log("Kullanıcı çıkış yapmıştır.");
    }
});


reportWebVitals();
