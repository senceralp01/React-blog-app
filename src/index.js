import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter, {history} from './routers/AppRouter';
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

let isRendered = false;
const renderApp = () => {
    if(!isRendered) {
        root.render(result);
        isRendered = true;
    };
};

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log("Kullanıcı giriş yapmıştır.");
        store.dispatch(getBlogsFromDatabase()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push("/blogs");
            }
        });
        document.querySelector(".logoutButton").style.display = "inline-block";
    }else {
        console.log("Kullanıcı çıkış yapmıştır.");
        renderApp();
        document.querySelector(".logoutButton").style.display = "none";
        history.push("/");
    }
});



reportWebVitals();
