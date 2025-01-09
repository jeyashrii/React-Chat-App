import React from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { useState } from "react";

const Login = () => {
  const [CurrState, setCurr] = useState("Sign Up");
  return (
    <div className="login">
      <img src={assets.logo_big} className="logo"></img>
      <form className="login-form">
        <h2>{CurrState}</h2>
        {CurrState === "Sign Up" ? (
          <input
            type="text"
            placeholder="username"
            className="form-input"
            required
          ></input>
        ) : null}

        <input
          type="email"
          placeholder="email address"
          className="form-input"
          required
        ></input>
        <input
          type="password"
          placeholder="password"
          className="form-input"
          required
        ></input>
        <button type="submit">
          {CurrState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-terms">
          <input type="checkbox"></input>
          <p>Agree to terms of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          {CurrState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account?
              <span onClick={() => setCurr("Login")}> click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account
              <span onClick={() => setCurr("Sign Up")}> click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
