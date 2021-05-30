import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Notifications from "../components/Notifications";
import ProfileCard from "../components/ProfileCard";
import ProfileWelcome from "../components/ProfileWelcome";
import "./style.css";
import Apiroutes from "../utils/Apiroutes";



function Profile() {
const [users, setUsers] = useState([])
const [caregiver, setCaregiver] = useState([])


useEffect(() => {

getCaregiver()
getData()
   
}, []);


function getCaregiver() { 
    Apiroutes.getCaregiver()
    .then (res => {
    console.log(res.data)
    setCaregiver(res.data)
    })
     
    .catch(err => console.log(err))}

const getData = () => {
    Apiroutes.populateProfile()
    .then (res => 
        setUsers(res.data))
    .catch(err => console.log(err));
}


return (
    <>
    <NavBar/>
<div className="Container">

<ProfileWelcome name={caregiver.firstname}/>

<div className="row">
    <div className="row-col-1 col-md-6 col-lg-6">

        {users.length ?(
        users.map(user => (
            <ProfileCard
            id={user.userid}
            firstname={user.firstname}
            lastname={user.lastname}
            />
        ))) : (
            <ProfileCard
            id={1}
            firstname={"Please add users from the button above"}
            />
        )
    }
    

    </div>

    <div className="row-col-1 col-md-6 col-lg-6">
        <div className="card text-center m-3">
    <h5 className="card-title">Daily Notifications</h5>
        <Notifications notification={"placeholder text"}/>
        <Notifications notification={"each card will hold 1 notification"}/>
     </div>
    </div>
</div>
</div>
</>
)
}
export default Profile;
