import React from 'react';
import { Link } from 'react-router-dom';


function SignupForm() {
    return (
        <>
          <form className="m-2">
        <h2>SIGN UP</h2>

        <section className="mb-2">
          <label for="signupFirstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="signupFirstName" aria-describedby="firstName"/>
        </section>

        <section className="mb-2">
          <label for="signuplastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="signuplastName" aria-describedby="lastName"/>
        </section>

        <section className="mb-2">
          <label for="signupEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="signupEmail" aria-describedby="useremail2"/>
        </section>

        <section className="mb-2">
          <label for="signupUsername" className="form-label">Username</label>
          <input type="text" className="form-control" id="signupUsername"/>
        </section>

        <section className="mb-2">
          <label for="signupPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="signupPassword"/>
        </section>

        <button id="signup" className="btn btn-dark localBtn">Submit</button>
        <section className="m-3 justify-content-end text-end">
          <label for="loginInstead" className="form-label">Already a member?</label>
          <Link id="loginInstead" to="/login" className="btn btn-light localBtn">Login</Link>
        </section>

      </form>  
        </>
    )
}

export default SignupForm
