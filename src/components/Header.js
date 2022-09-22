import React from 'react';
import { logout } from "../actions/auth";
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
      <NavLink to="/blogs" activeClassName="active" className="navlink">Blogs</NavLink>
      <NavLink to="/create" activeClassName="active" className="navlink">Create</NavLink>
      <button onClick={logout} className="logoutButton">Logout</button>
    </header >
  )
}

export default Header