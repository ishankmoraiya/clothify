import React from "react";
import {Link} from "react-router-dom"
import "./Login.css";
const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "",
      }}
    >
      <div className="login">
        <h3>Login</h3>
        <div className="inputs">
          <div style={{ display: "flex", flexDirection: "column",gap:".2rem"}}>
            <span>Email</span>
            <input style={{width:"15rem" ,border:"2px solid lightgrey", borderRadius:"4px" ,height:"2.1rem"}} type="email" placeholder="Email" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent:"space-between", gap:'.2rem'}}>
            <span>Password</span>
            <input style={{width:"15rem" ,border:"2px solid lightgrey", borderRadius:"4px" ,height:"2.1rem"}}type="password" placeholder="Password" />
          </div>
        </div>
        <button className="btn" style={{borderRadius:"4rem", width:"6rem", background:"#1c75d3" ,border:"1px rgb(102, 100, 97)"}}>Login</button>
        <span>Create an account !  <Link to="/signin" style={{color:"bluev"}}> Sign in?</Link></span>
      </div>
    </div>
  );
};

export default Login;
