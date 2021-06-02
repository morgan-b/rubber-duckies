import React from 'react';
import { Link } from 'react-router-dom';


function SignupForm(props) {
    return (
        <>
          <form className="m-2">
        <h2>SIGN UP</h2>

        <section className="mb-2">
          <label className="form-label">First Name</label>
          <input 
          name="firstname"
          value={props.firstName}
          onChange={props.handleChange}
          type="text" 
          className="form-control" 
          id="signupFirstName" 
          aria-describedby="firstName"/>
        </section>

        <section className="mb-2">
          <label className="form-label">Last Name</label>
          <input 
          name="lastname"
          value={props.lastName}
          onChange={props.handleChange}
          type="text" 
          className="form-control" 
          id="signuplastName" 
          aria-describedby="lastName"/>
        </section>

        <section className="mb-2">
          <label className="form-label">Email address</label>
          <input 
          name="email"
          value={props.email}
          onChange={props.handleChange}
          type="email" 
          className="form-control" 
          id="signupEmail" 
          aria-describedby="useremail2"/>
        </section>

        <section className="mb-2">
          <label className="form-label">Username</label>
          <input 
          name="username"
          value={props.username}
          onChange={props.handleChange}
          type="text" 
          className="form-control" 
          id="signupUsername"/>
        </section>

        <section className="mb-2">
          <label className="form-label">Password</label>
          <input 
          name="password"
          value={props.password}
          onChange={props.handleChange}
          type="password" 
          className="form-control" 
          id="signupPassword"/>
        </section>

        <section className="m-3" onChange={props.radioInput}>
          <section className="form-check form-check-inline">
            <input className="form-check-input" type="radio" value="user" name="flexRadioDefault" id="userRadio"/>
              <label className="form-check-label">User</label>
          </section>
        <section className="form-check form-check-inline">
            <input className="form-check-input" type="radio" value="caregiver" name="flexRadioDefault" id="caregiverRadio"/>
              <label className="form-check-label"> Caregiver</label>
        </section>
        </section>


        <button 
        id="signup" 
        className="btn btn-dark localBtn"
        onClick={props.handleSubmit}
        >Submit</button>
        <section className="m-3 justify-content-end text-center">
          <label className="form-label">Already a member?</label>
          <br></br>
          <Link id="loginInstead" to="/login" className="btn btn-light localBtn">Login</Link>
        </section>

      </form>  
        </>
    )
}

export default SignupForm
