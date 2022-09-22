import React from 'react';
import { connect } from 'react-redux'; // redux içerisindeki user id bilgisini alabilmek için connect ile redux'a bağlanacağız.
import { Redirect, Route } from 'react-router-dom';
import Header from '../components/Header';

// isAuthenticated bilgisinden gelen değer eğer true ise yani kullanıcı girişi yapılmış ise bu durumda göndermek istediğimiz componente yönlendireceğiz, false gelirse ana sayfaya redirect ederek yönlendireceğiz. Yani kullanıcılara özel Route'lar tanımlamış oluyoruz. Dolayısıyla buradaki Route bilgileri dinamik olarak oluşturulmuştur. Bu bilgiler props parametresi içinde gelen AppRouter.js'deki <PrivateRoute ...>'lardan gelen parametrelerdir. Props içerisine isAuthenticated'i de set ettiğimizi hatırlayalım.
const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />

);

// State'i componente bağlamak için:
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // gelen user id string bir ifadedir. iki ünlemin anlamı ise bu ifade set edilmiş ise true değer undefined ise false değer döndürür.
});

export default connect(mapStateToProps)(PrivateRoute);