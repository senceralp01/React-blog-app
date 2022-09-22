import React from 'react'

const BlogDetailsItem = ({ id, title, description }) => {
  return (
    <div className='details'>
        <p>Blog ID: <b>{id}</b></p>
        <p>Blog title: <b>{title}</b></p>
        <p>Blog description: <b>{description}</b></p>
    </div>
  )
}

export default BlogDetailsItem