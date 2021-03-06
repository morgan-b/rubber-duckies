import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import LoginWrapper from "../components/LoginWrapper";
import LoginForm from "../components/LoginForm";
import Apiroutes from "../utils/Apiroutes";
import { useUserContext } from "../utils/AuthContext";

function Login() {
  const { logIn } = useUserContext();
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
    Apiroutes.userLogin({
      email: email,
      password: password,
    })
      .then((res) => {
        console.log("user logged in");
        logIn(res.data.loggedin);
        localStorage.clear();
      })
      .then(() => {
        localStorage.setItem("user", true);
      })
      .then(() => {
        history.push("/home");
      })
      .catch((err) => {
        setError();
        console.log(err);
      });
  };

  return (
    <>
      <LoginWrapper>
        <section className="col-10 mx-auto justify-content-center text-center col-lg-5">
          {state.errorMessage && (
            <h5 className="error"> {state.errorMessage} </h5>
          )}
          <LoginForm
            email={email}
            password={password}
            loginEmailChange={loginEmailChange}
            loginPassChange={loginPassChange}
            handleLogin={handleLogin}
          >
            {" "}
          </LoginForm>
        </section>
      </LoginWrapper>
    </>
  );
}
export default Login;
