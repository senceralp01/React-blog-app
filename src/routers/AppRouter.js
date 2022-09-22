import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'
// import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

// <BrowserRouter>'ı kaldrdık onun yerine <Router> ekledik. Sebebi BrowserRouter'da olan ve props içerisinde component'lere gönderilen history bilgisine componentler dışında da ihtiyacımızın olmasıdır. Örneğin bizim uygulamamızda index.js içerisinde login işlemi yapıldıktan sonra login sayfasına yönlendirme ihtiyacımız doğdu. Bunun için npm ile history paketini kurduk ve createHistory import ettik ve bir history object'i oluşturduk. Ve history bilgisini içermeyen yalın <Router>'ı ekledik. Bu yalın <Router> içerisinde olmayan history bilgisini biz manuel olarak <Router history={history}> şeklinde ekledik.

const AppRouter = () => {
  return (
    <div className='app'>
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/blogs" component={BlogListPage} exact/>
                    <Route path="/create" component={AddBlogPage} />
                    <Route path="/edit/:id" component={EditBlogPage} />
                    <Route path="/blogs/:id" component={BlogDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    </div>
  )
}

export default AppRouter