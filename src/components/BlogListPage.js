import React from 'react'
import { Link } from 'react-router-dom'

const BlogListPage = () => {
  return (
    <div>
      <p>Blog Page</p>
      <Link to="1">Blog 1</Link>
      <Link to="2">Blog 2</Link>
      <Link to="3">Blog 3</Link>    
    </div>
  )
}

export default BlogListPage