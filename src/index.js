import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter, {history} from './routers/AppRouter';
import './App.css';
import configureStore from './store/configureStore';
import { getBlogsFromDatabase, clearBlogs } from './actions/blogs';
import Loader from './components/Loader';
// import './firebase/firebaseConfig';
import { firebase } from './firebase/firebaseConfig';
import { loginAction, logoutAction } from './actions/auth';

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


// Aşağıdaki dispatch'leri auth.js içerisinde dispatch etmemize gerek olmadığı için burada store üzerinden dipatch ettik.
firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(loginAction(user.uid));
        store.dispatch(getBlogsFromDatabase()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push("/blogs");
            }
        });
        document.querySelector(".loginButton").style.display = "none";
        document.querySelector(".logoutButton").style.display = "inline-block";
    }else {
        store.dispatch(logoutAction());
        store.dispatch(clearBlogs());
        renderApp();
        document.querySelector(".logoutButton").style.display = "none";
        document.querySelector(".loginButton").style.display = "inline-block";
        history.push("/");
    }
});



reportWebVitals();
