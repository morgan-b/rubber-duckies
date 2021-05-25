import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import logo from "../assets/logo-duckies.png";
import "./style.css";
import LoginWrapper from "../components/LoginWrapper"
import LoginForm from '../components/LoginForm';
import Apiroutes from '../utils/Apiroutes';

function Login() {
//use state to set email and password from user input + set usertype
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usertype, setUsertype] = useState('');

    const history = useHistory();

//When user inputs email, set email
const loginEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email)
}

//When user inputs password, set password
const loginPassChange = (e) => {
    setPassword(e.target.value);
    console.log(password)
}

const radioInput= (e) => {
    console.log(e.target.value)
    setUsertype(e.target.value)
}

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
    history.push("/home")
    })
    .catch(err => console.log(err))
}
else if (usertype === "caregiver") {
    Apiroutes.cgLogin({
        email: email,
        password: password
    })
    .then(res => {
        console.log("caregiver logged in");
        history.push("/profile")

    })
    .catch(err => console.log(err))

}
}

    return (
        <>
          <LoginWrapper>

        <section className="col-10 mx-auto justify-content-center text-center col-lg-5">
            <img src={logo} className="img-fluid" style={{'width':'200px'}} alt="logo"/>
            <LoginForm
            email={email}
            password={password}
            loginEmailChange={loginEmailChange}
            loginPassChange={loginPassChange}
            handleLogin={handleLogin}
            radioInput={radioInput}
          
            />
        </section>

   </LoginWrapper>
        </>
    )
}

export default Login
