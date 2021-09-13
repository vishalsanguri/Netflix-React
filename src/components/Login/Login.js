import React from "react";
import { Redirect } from "react-router";
import "./Login.css";
export default function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasaccount,
    setHasaccount,
    emailerror,
    passworderror,
  } = props;
  return (
    <div className="login-form">
      <div className="form-container">
        <div className="login-fields">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{emailerror}</p>
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{passworderror}</p>
          <div>
            {hasaccount ? (
              <>
                <button className="button-sing-in-up" onClick={handleLogin}>
                  signin
                </button>
                <p className="para-con">Don't have account ?</p>
                <span
                  className="span-text"
                  onClick={() => {
                    setHasaccount(!hasaccount);
                  }}
                >
                  signup
                </span>
              </>
            ) : (
              <>
                <button className="button-sing-in-up" onClick={handleSignup}>
                  signup
                </button>
                <p className="para-con">Have an account ?</p>
                <span
                  className="span-text"
                  onClick={() => {
                    setHasaccount(!hasaccount);
                  }}
                >
                  signin
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
