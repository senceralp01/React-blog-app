import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import { addBlog } from '../actions/blogs'

const AddBlogPage = (props) => {
  return (
    <div>
        <p className='add'>Add Blog</p>
        <BlogForm onSubmit={(blog) => {
          props.dispatch(addBlog(blog));
          props.history.push('/blogs'); // props içerisinde route objesi de geliyor. Route objesi içerisinde history adındaki özelliğin push metodu aracılığıyla yönlendirme yapılabilmektedir.
        }} />
    </div>
  )
}

// Redux ile component connect edilerek redux bilgileri props parametresi içerisine ekstra değerler olarak aktarılır.
export default connect()(AddBlogPage)