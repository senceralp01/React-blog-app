import React from 'react'
import { Link, useParams } from 'react-router-dom'


const BlogDetailsPage = ({match}) => {
  const { id } = useParams();
  console.log(id)
  return (
    <>
      <h1>Blog Details Page: {id}</h1>
      <Link to="/blogs">Go back</Link>
    </>
  )
}

export default BlogDetailsPage