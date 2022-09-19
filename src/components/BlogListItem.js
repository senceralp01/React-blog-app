import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ id, title }) => {
  return (
    <>
        <li className='listButtons'>
            <Link to={`/blogs/${id}`} className='detailLink' >Blog Details of {title}</Link>
            <Link to={`/edit/${id}`} className='editLink' >Edit</Link>
        </li>
    </>
  )
}

export default BlogListItem