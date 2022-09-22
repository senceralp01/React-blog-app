import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import blogReducer from '../reducers/blogs';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk'; // Redux ile asenkron sorguların kullanılabilmesi ve asenkron işlemlerin yürütülebilmesi için gerekli olan thunk middleware'ini içerir.

// Middleware kullanırken, Redux devtoollarının da etkin olarak kalması için compose import edilerek aşağıdaki işlem yapılır ve middleware compose içerisine alınır:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Tek bir store içerisine farklı reducer bilgilerini aktararak farklı state'ler oluşturuyoruz.
// Buradaki blogs: ve auth: olarak tanımladığımız değerler state'in elamanları oluyorlar ve stat.blog state.auth olarak erişilebilirler.
export default () => {
    const store = createStore(
        combineReducers({
                blogs: blogReducer,
                auth: authReducer
        }),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

