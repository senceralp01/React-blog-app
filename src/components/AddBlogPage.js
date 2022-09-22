import React from 'react'
import BlogForm from './BlogForm'
import { connect } from 'react-redux'
import { addBlogToDatabase } from '../actions/blogs'

// props'un içerisinde dispatch halihazırda vardır.
const AddBlogPage = (props) => {
  return (
    <div>
        <p className='add'>Add Blog</p>
        <BlogForm onSubmit={(blog) => { // onSubmit içindeki fonksiyon BlogForm'a props olarak gönderilir. BlogForm içerisinde ise blog objesi parametre olarak bu fonksiyona gönderilir. 
          props.dispatch(addBlogToDatabase(blog)); // addBlogToDatabase(blog)'dan dönen şey, aksiyon generatöründen gelen bir objedir. Bu obje ilgili reducer'a dispatch edilir ki bu reducer store'de mevcuttur. Aşağıda connect ile bu componenti redux'a bağladığımız için de o reducera bu component ulaşabilir oluyor.
          props.history.push('/blogs'); // Hatırlanacağı üzere props içerisinde route objesi de geliyor. Route objesi içerisinde, history adındaki özelliğin, push metodu aracılığıyla yönlendirme yapılabilmektedir.
        }} />
    </div>
  )
}

// Redux ile component connect edilerek redux bilgileri props parametresi içerisine ekstra değerler olarak aktarılır.
export default connect()(AddBlogPage)