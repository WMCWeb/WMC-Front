import React from "react";

const Login = () => {
    return (
        <div className="contentalign">
            <h3 className="adminTitle">
            </h3>
            <h1 className="loginTitle">Login</h1>
            <input
                className="loginInput"
                type="text"
                placeholder="ID"
            />
            <br></br>
            <input
                className="loginInput"
                type="password"
                placeholder="password"
            />
            <br></br>
            <button className="loginBtn">
                Login
            </button>
        </div>
    )
};

export default Login;