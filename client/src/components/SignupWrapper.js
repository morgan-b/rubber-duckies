import React from "react";
import logo from "../assets/logo-duckies.png";
function SignupWrapper(props) {
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
                <section>
                  <h1 className="display-4 fw-bold lh-1 mb-3">
                    Welcome to Rubber Duckies!
                  </h1>
                  <p className="col-lg-10 fs-4 subtext">
                    We are so excited that you are here.
                    <br></br>Rubber Duckies exists to help everyone communicate
                    in a form that feels best to them. We can't wait to support
                    your loved ones on their journey to a happier and easier way
                    of expressing themselves.{" "}
                  </p>
                </section>
            </>
          </section>
          {props.children}
        </section>
      </section>
    </>
  );
}

export default SignupWrapper;