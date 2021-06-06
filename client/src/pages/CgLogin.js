import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";
import CgLoginWrapper from "../components/CgLoginWrapper";
import CgLoginForm from "../components/CgLoginForm";
import Apiroutes from "../utils/Apiroutes";
import { useUserContext } from "../utils/AuthContext";

function Login() {
  const { cgLogIn } = useUserContext();
  //use state to set email and password from user input + set usertype
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const history = useHistory();

  //When user inputs email, set email
  const loginEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //When user inputs password, set password
  const loginPassChange = (e) => {
    setPassword(e.target.value);
  };

  const setError = (e) => {
    setState({ errorMessage: "Invalid login information" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Apiroutes.cgLogin({
      email: email,
      password: password,
    })
      .then((res) => {
        console.log("caregiver logged in");
        cgLogIn(res.data.cgloggedin);
        localStorage.clear();
      })
      .then(() => {
        localStorage.setItem("caregiver", true);
        history.push("/profile");
      })

      .catch((err) => {
        setError();
        console.log(err);
      });
  };

  return (
    <>
      <CgLoginWrapper>
        <section className="col-10 mx-auto justify-content-center text-center col-lg-5">
          {state.errorMessage && (
            <h5 className="error"> {state.errorMessage} </h5>
          )}
          <CgLoginForm
            email={email}
            password={password}
            loginEmailChange={loginEmailChange}
            loginPassChange={loginPassChange}
            handleLogin={handleLogin}
          >
            {" "}
          </CgLoginForm>
        </section>
      </CgLoginWrapper>
    </>
  );
}

export default Login;
