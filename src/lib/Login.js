import React from "react";

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
    <section className="login">
      <div>
        <label>Username</label>
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
              <button onClick={handleLogin}>signin</button>
              <p>
                dont have account ?
                <span
                  onClick={() => {
                    setHasaccount(!hasaccount);
                  }}
                >
                  signup
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>signup</button>
              <p>
                Don't have an account ?
                <span
                  onClick={() => {
                    setHasaccount(!hasaccount);
                  }}
                >
                  signin
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
