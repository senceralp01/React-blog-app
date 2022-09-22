import React from 'react';
import { login, logout } from "../actions/auth";


const Header = () => {
  return (
    <header>
      <div className='header'>
        <p>Blog App</p>
        <button onClick={login} className="loginButton">Login</button>
        <button onClick={logout} className="logoutButton">Logout</button>
      </div>
    </header >
  )
}

export default Header