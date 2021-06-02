import React, {useState, useEffect, Component} from 'react';
import {useLocation} from 'react-router-dom';
import NavBar from "../components/NavBar"
import logo from "../assets/logo-duckies.png"
import Apiroutes from '../utils/Apiroutes';
import BarChart from "../components/UserChart"




function userDetails() {
const [userData, setUserData] = useState([]);
const [actions, setActions] = useState([]);
const [timeStamp, setTimeStamps] = useState([]);




//uselocation hook to get data from one page to the next. 
//used this to pass on user data depending on which user is clicked on
const {state} = useLocation()

console.log(state)

useEffect(() => {
  setUserData(state)
 let userid = state.userid
 console.log(userid)

  populateUserDetails(userid)
  

}, [])


const populateUserDetails = (userid) => {



  Apiroutes.userDetails(userid)


  .then (res => {
   console.log("user found!")

    setActions(res.data)
    setTimeStamps(res.data)

    
    console.log(res.data)
   
  })
 
  
    
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




<BarChart  data={timeStamp}>

</BarChart>



      <div className="container">

      <table className="table table-striped">
  <thead>
    <tr key="8">
      <th key="6"scope="col">Needs</th>
      <th key="7"scope="col">Date/Time</th>
    </tr>
  </thead>

  <tbody>
  {actions.length ? (
    actions.map((action) =>(


   
    <tr key={action.userActionDetailId+3}>
      <td key={action.userActionDetailId+1}>  {action.userInput}</td>
      <td key={action.userActionDetailId+2}>{new Date(action.date_created).toString()}</td>
    </tr>
       ))) :(
        <tr>
        <th key="1" scope="row">1</th>
        <td key="2"> awaiting new action</td>
        <td key="3" > awaiting new action</td>
      </tr>
       )
      }
  </tbody>
</table>        


        </div>    
        </>
    )
}

export default userDetails
