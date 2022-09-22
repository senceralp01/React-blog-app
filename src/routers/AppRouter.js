import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import BlogListPage from '../components/BlogListPage';
import BlogDetailsPage from '../components/BlogDetailsPage';
import NotFoundPage from '../components/NotFoundPage';
import AddBlogPage from '../components/AddBlogPage';
import EditBlogPage from '../components/EditBlogPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Brand from '../components/Brand';


export const history = createHistory();

// <BrowserRouter>'ı kaldrdık onun yerine <Router> ekledik. Sebebi BrowserRouter'da olan ve props içerisinde component'lere gönderilen history bilgisine componentler dışında da ihtiyacımızın olmasıdır. Örneğin bizim uygulamamızda index.js içerisinde login işlemi yapıldıktan sonra login sayfasına yönlendirme ihtiyacımız doğdu. Bunun için npm ile history paketini kurduk ve createHistory import ettik ve bir history object'i oluşturduk. Ve history bilgisini içermeyen yalın <Router>'ı ekledik. Bu yalın <Router> içerisinde olmayan history bilgisini biz manuel olarak <Router history={history}> şeklinde ekledik.

// Login olmuş kullanıcılara özel route bilgisi atamak için PrivateRouter'ları Router temelli olmak üzere biz ürettik ve import ettik.

const AppRouter = () => {
  return (
    <div className='app'>
        <Router history={history}>
            <div>
                <Brand />
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact/>
                    <PrivateRoute path="/blogs" component={BlogListPage} exact/>
                    <PrivateRoute path="/create" component={AddBlogPage} />
                    <PrivateRoute path="/edit/:id" component={EditBlogPage} />
                    <PrivateRoute path="/blogs/:id" component={BlogDetailsPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    </div>
  )
}

export default AppRouter