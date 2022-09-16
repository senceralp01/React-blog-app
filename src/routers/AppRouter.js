import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blogs">   {/*Parent Route*/}
                        <Route index element={<BlogListPage />} />
                        <Route path=":id" element={<BlogDetailsPage />} />   {/*Child Route*/}
                    </Route>
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter