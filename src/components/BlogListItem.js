import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ id, title }) => {
  return (
    <>
        <li>
            <Link to={id} className='link' >Blog Details</Link> - {title}
        </li>
    </>
  )
}

export default BlogListItem