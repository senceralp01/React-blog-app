import { createStore, combineReducers } from 'redux';
import blogReducer from '../reducers/blogs'
import authReducer from '../reducers/auth'

// Tek bir store içerisine farklı reducer bilgilerini aktararak farklı state'ler oluşturuyoruz.
export default () => {
    const store = createStore(
        combineReducers({
                blogs: blogReducer,
                auth: authReducer
        })
    );
    return store;
}

