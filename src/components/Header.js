import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <p className='header'>Blog App</p>
        <NavLink to="/" activeClassName="active" className="navlink" exact>Home</NavLink>
        <NavLink to="/blogs" activeClassName="active" className="navlink">Blogs</NavLink>
        <NavLink to="/create" activeClassName="active" className="navlink">Create</NavLink>
        <NavLink to="/contact" activeClassName="active" className="navlink">Contact</NavLink>
    </header>
  )
}

export default Header