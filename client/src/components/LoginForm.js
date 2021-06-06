import React from "react";
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <>
      <form className="m-2">
        <h2>LOGIN</h2>

        <section className="mb-2">
          <label className="form-label">Email</label>
          <input
            value={props.email}
            type="email"
            onChange={props.loginEmailChange}
            className="form-control"
            id="user-email"
          />
        </section>

        <section className="mb-2">
          <label className="form-label">Password</label>
          <input
            value={props.password}
            type="password"
            onChange={props.loginPassChange}
            className="form-control"
            id="user-password"
          />
        </section>

        <button
          id="login"
          className="btn btn-dark localBtn"
          onClick={props.handleLogin}
        >
          Login
        </button>
        <section className="m-3 justify-content-end text-center">
          <label className="form-label">Not a member yet?</label>
          <br></br>
          <Link
            id="signupInstead"
            to="/signup"
            className="btn btn-light localBtn"
          >
            Signup
          </Link>
        </section>
        <br></br>
        <Link id="cgLogin" to="/cglogin" className="btn btn-light localBtn">
          Login as CareGiver
        </Link>
      </form>
    </>
  );
}

export default LoginForm;
