import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "./style.css";

function ErrorPage() {
  return (
    <>
      <NavBar />
      <section className="card m-3 text-center">
        <p>Oops! This page doesn't exist.</p>
      </section>
    </>
  );
}

export default ErrorPage;
