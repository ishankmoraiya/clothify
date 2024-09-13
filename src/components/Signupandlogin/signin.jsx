import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {


  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [password,setPassword]=useState("")

  const handleSign=async(e)=>{
    console.log(email);
  }

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
        <h3>Sign up</h3>
        <form onSubmit={handleSign}>
          <div className="inputs">
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".2rem" }}
            >
              <span>Email</span>
              <input
                className="inputSign"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: ".2rem",
              }}
            >
              <span>Mobile</span>
              <input
                className="inputSign"
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
                type="number"
                placeholder="Mobile No."
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: ".2rem",
              }}
            >
              <span>Password</span>
              <input
                className="inputSign"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}

                type="password"
                placeholder="Password"
              />
            </div>
          </div>
         
        </form>
        <button
          className="btn"
          type="submit"
          style={{
           
            borderRadius: "4rem",
            width: "6rem",
            background: "#1c75d3",
            border: "1px rgb(102, 100, 97)",
          }}
          onClick={(e)=>handleSign(e)}
        >
          Sign up
        </button>
        <span>
          Already have an account !{" "}
          <Link to="/login" style={{ color: "bluev" }}>
            {" "}
            Login?
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signin;
