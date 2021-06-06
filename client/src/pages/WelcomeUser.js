import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-duckies.png";

function WelcomeUser() {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <section className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt="logo"
          style={{ width: "100px" }}
        />
        <h1 className="display-5 fw-bold">
          Hi {state.firstname}, Welcome to Rubber Duckies!
        </h1>
        <section className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Before you begin, take a quick assessment to help us learn how you
            prefer to communicate. For each emotion, want or need, please choose
            a color, image or text. Ready to begin? Click below!
          </p>
          <p className="lead mb-4 fw-bold">
            Caregivers,helpers or guardians, please make a note of your duckies
            user ID: {state.userid}
          </p>
          <section className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to="/assessment"
              className="btn btn-dark localBtn btn-lg px-4 gap-3"
            >
              Start Assessment
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}

export default WelcomeUser;
