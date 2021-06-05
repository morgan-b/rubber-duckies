import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import LoginWrapper from "../components/LoginWrapper";
import LoginForm from "../components/LoginForm";
import Apiroutes from "../utils/Apiroutes";
import {useUserContext} from "../utils/AuthContext";

function Login() {
  const {logIn} =useUserContext()
  //use state to set email and password from user input + set usertype
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [state, setState] = useState("");
  const history = useHistory();
  //When user inputs email, set email
  const loginEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  //When user inputs password, set password
  const loginPassChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
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
        console.log(res)
        logIn(res.data.loggedin)
        localStorage.clear();
        console.log()

        
      })
      .then(() => {
        
        localStorage.setItem("user", true);
     

      })
      .then(() => { history.push("/home")})
      //  .then (res => {
      //  if(localStorage.getItem("user") === true) {
      //          history.push("/home")
      //              }
      //              else {
      //                  setTimeout(() => {
      //                      history.push("/home")
      //                     window.location.reload()
      //                  }, 1000)
      //              }

      //  })
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