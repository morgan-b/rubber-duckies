import React from 'react';
import logo from "../assets/logo-duckies.png";
import "./style.css";
import LoginWrapper from "../components/LoginWrapper";
import SignupForm from '../components/SignupForm';


function Signup() {
    return (
        <>
      <LoginWrapper>

    <section className="col-10 mx-auto justify-content-center text-center col-lg-5">
      <img src={logo} class="img-fluid" style={{'width':'200px'}} alt="logo"/>

     <SignupForm/>
 
    </section>

 </LoginWrapper>
        </>
    )
}

export default Signup;
