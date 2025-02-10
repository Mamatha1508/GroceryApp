import React from "react";
import { Link } from "react-router";

const Login=()=>{
    return (
        <div>
            <h1>Login page</h1>
            <Link to='/'><button data-testid='login'>Login</button></Link>
        </div>
    )
}

export default Login;