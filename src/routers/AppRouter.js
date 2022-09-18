import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import AddBlogPage from '../components/AddBlogPage'

const AppRouter = () => {
  return (
    <div className='app'>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/blogs" component={BlogListPage} exact/>
                    <Route path="/create" component={AddBlogPage} />
                    <Route path="/blogs/:id" component={BlogDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter