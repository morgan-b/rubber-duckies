import React, {useState} from 'react';
import logo from "../assets/logo-duckies.png";
import "./style.css";
import LoginWrapper from "../components/LoginWrapper";
import SignupForm from '../components/SignupForm';
import Apiroutes from '../utils/Apiroutes';


function Signup() {
  //initialize state with empty fields
const [signupInfo, setSignupInfo] = useState({
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: ""
})

//use to set user type so we know which table to make POST request 
//because there are separate tables fro user and caregiver
const [usertype, setUsertype] = useState('');


const handleChange = (e) => {
  const {name, value} = e.target;
  setSignupInfo({... signupInfo, [name]:value});
}

const radioInput= (e) => {
  console.log(e.target.value)
  setUsertype(e.target.value)
}

//depending on user type, POST request will be made to relevant table
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(signupInfo)

  if(usertype === "user") {
    Apiroutes.userSignup(signupInfo)
    .then(res => console.log("user signed in"))
    .catch(err => console.log(err))
  }
  else if (usertype === "caregiver") {
    Apiroutes.cgSignup(signupInfo)
    .then(res => console.log("caregiver signed in"))
    .catch(err => console.log(err))
  }
}






    return (
        <>
      <LoginWrapper>

    <section className="col-10 mx-auto justify-content-center text-center col-lg-5">
      <img src={logo} className="img-fluid" style={{'width':'200px'}} alt="logo"/>

     <SignupForm
     handleChange={handleChange}
     handleSubmit={handleSubmit}
     radioInput={radioInput}
     />
 
    </section>

 </LoginWrapper>
        </>
    )
}

export default Signup;