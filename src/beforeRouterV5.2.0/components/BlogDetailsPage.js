import React from 'react'
import { Link, useParams } from 'react-router-dom'


const BlogDetailsPage = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <>
      <h1>Blog Details Page: {id}</h1>
      <Link to="/blogs">Go back</Link>
    </>
  )
}

const mapStatetoProps = (state) => {
  return {
    blog: state.blogs.find((blog) => {
      
    })
  }
}

export default BlogDetailsPage