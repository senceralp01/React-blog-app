import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Blog App</h1>
        <NavLink to="/" className={({isActive}) => (isActive ? "active" : 'none')} end>Home</NavLink>
        <NavLink to="/blogs" className={({isActive}) => (isActive ? "active" : 'none')}>Blogs</NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : 'none')}>Contact</NavLink>
    </header>
  )
}

export default Header