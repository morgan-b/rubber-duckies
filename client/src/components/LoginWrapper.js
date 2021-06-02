import React from 'react';
import logo from "../assets/logo-duckies.png";
const pathname = window.location.pathname
console.log(pathname)
function LoginWrapper(props) {
    return (
        <>
        <section className="container col-xl-10 col-xxl-8 px-4 py-5 text-center">
          
        <img
            src={logo}
            className="img-fluid"
            style={{ width: "150px" }}
            alt="logo"
          />
  <section className="row align-items-center g-5 py-5">

    <section className="col-lg-7 text-center text-lg-start">
<>
{pathname === ("/login","/") ? (
  <div>
      <h1 className="display-4 fw-bold lh-1 mb-3">Welcome Back Duckies.</h1>
      <p className="col-lg-10 fs-4 subtext">We've missed you! <br></br>Login below with your email, password, and account type.</p>
      </div>
      ):(   
        <div>
        <h1 className="display-4 fw-bold lh-1 mb-3">Welcome Duckies!</h1>
      <p className="col-lg-10 fs-4 subtext">We are so excited that you are here. 
      <br></br>Rubber Duckies exists to help everyone communicate in a form that feels best to them. We can't wait to support you on your journey to a happier and easier way of expressing yourself. </p>
      </div>
      )

   }
</>
    </section>
    {props.children}
    </section>
</section>
            
        </>
    )
}

export default LoginWrapper
