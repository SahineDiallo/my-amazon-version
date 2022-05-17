import { useRef } from "react";

import React from "react";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleLogin = () => {};
  return (
    <div>
      <form action="" method="post">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            ref={emailRef}
            id="emal"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            ref={passwordRef}
            id="password"
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
        </div>
        <button
          onClick={handleLogin}
          //   disabled={loading}
          className="amazon__btn"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
