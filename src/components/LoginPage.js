import React from "react";
import { login, logout } from "../actions/auth";

export const LoginPage = () => (
    <div>
        <div>
            <button onClick={login} className="loginButton">Login</button>
        </div>
        <div>
            <button onClick={logout} className="logoutButton">Logout</button>
        </div>
    </div>
)

export default LoginPage;