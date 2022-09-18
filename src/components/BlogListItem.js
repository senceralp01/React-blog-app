import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ id, title }) => {
  return (
    <>
        <li>
            <Link to={`/blogs/${id}`} className='link' >Blog Details of {title}</Link>
        </li>
    </>
  )
}

export default BlogListItem