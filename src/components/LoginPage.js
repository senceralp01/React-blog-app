import React from "react";
import { login } from "../actions/auth";

export const LoginPage = () => (
    <div>
        <button onClick={login} className="loginButton">Login</button>
    </div>
)

export default LoginPage;