import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.css";
import LoginWrapper from "../components/LoginWrapper";
import LoginForm from "../components/LoginForm";
import Apiroutes from "../utils/Apiroutes";



function Login() {
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

  const radioInput = (e) => {
    console.log(e.target.value);
    setUsertype(e.target.value);
  };

  const setError = (e) => {
    setState({ errorMessage: "Invalid login information" });
  };

  //depending on user type, POST request will be made to relevant table
  //as user and caregiver tables are separate at the backend
  const handleLogin = (e) => {
    e.preventDefault();
    if (usertype === "user") {
      Apiroutes.userLogin({
        email: email,
        password: password
    })
    .then(res => {
    console.log("user logged in");
    localStorage.clear()
    localStorage.setItem('user', true)
    //history.push("/home")
    })
     .then (res => {
     if(localStorage.getItem("user") === true) {
             history.push("/home")
                 }
                 else {
                     setTimeout(() => {
                         history.push("/home")
                        window.location.reload()
                     }, 1000)
                 }

     })
   .catch((err) => {
          setError();
          console.log(err);
        });
}
else if (usertype === "caregiver") {
    Apiroutes.cgLogin({
        email: email,
        password: password
    })
    .then(res => {
        console.log("caregiver logged in");
        localStorage.clear()
        localStorage.setItem('caregiver',true)
        //history.push("/profile")

    })
     .then(res => {
         if(localStorage.getItem("caregiver") === true) {
         history.push("/profile")
         }
         else {
             setTimeout(() => {
                 history.push("/profile")
                 window.location.reload()
             }, 1000)
         }

     })
    .catch((err) => {
          setError();
          console.log(err);
        });

}
}

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
            radioInput={radioInput}
          >
            {" "}
          </LoginForm>
        </section>
      </LoginWrapper>
    </>
  );
}

export default Login;
