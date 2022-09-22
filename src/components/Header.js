import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from "../actions/auth";


const Header = () => {
  return (
    <header>
      <div className='header'>
        <p>Blog App</p>
        <button onClick={logout} className="logoutButton">Logout</button>
      </div>
      <nav>
        <NavLink to="/" activeClassName="active" className="navlink" exact>Home</NavLink>
        <NavLink to="/blogs" activeClassName="active" className="navlink">Blogs</NavLink>
        <NavLink to="/create" activeClassName="active" className="navlink">Create</NavLink>
        <NavLink to="/contact" activeClassName="active" className="navlink">Contact</NavLink>
      </nav>
    </header >
  )
}

export default Header