import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import NavBar from "../components/NavBar"
import logo from "../assets/logo-duckies.png"
import Apiroutes from '../utils/Apiroutes';

function userDetails() {
const [userData, setUserData] = useState([]);
const [actions, setActions] = useState([]);

//uselocation hook to get data from one page to the next. 
//used this to pass on user data depending on which user is clicked on
const {state} = useLocation()
useEffect(() => {
  setUserData(state)
 let id = state.userid
 console.log(id)
  populateUserDetails(id)

}, [])


const populateUserDetails = (id) => {
console.log(id)
  Apiroutes.userDetails({id})
  .then (res => {
    setActions(res.data)
    console.log("user found!")
    console.log(res.data)})
.catch(err => console.log(err));
}





    return (
        <>
        <NavBar/>
        <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src={logo} alt="logo" style={{'width':'100px'}}/>
    <h1 className="display-5 fw-bold">{userData.firstname} {userData.lastname}</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">View reports below</p>
    </div>
  </div>  

      <div className="container">

      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Needs</th>
      <th scope="col">Date/Time</th>
    </tr>
  </thead>

  <tbody>
    
    <tr>
      <th scope="row">1</th>
      <td>placeholder</td>
      <td>placeholder</td>
    </tr>
      
  </tbody>
</table>        


        </div>    
        </>
    )
}

export default userDetails
