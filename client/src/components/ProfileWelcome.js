import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-duckies.png";

function ProfileWelcome(props) {
  return (
    <>
      <section className="px-4 py-5 my-5 text-center userHeader">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt="logo"
          style={{ width: "100px" }}
        />
        <h1 className="display-5 fw-bold">Welcome {props.name}!</h1>
        <section className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Click on a user below to view their reports or add a new user to
            your network.
          </p>
          <section className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to="/adduser"
              className="btn btn-dark localBtn btn-lg px-4 gap-3"
            >
              Add User
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}

export default ProfileWelcome;
