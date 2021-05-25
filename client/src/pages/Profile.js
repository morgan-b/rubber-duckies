import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Notifications from "../components/Notifications";
import ProfileCard from "../components/ProfileCard";
import ProfileWelcome from "../components/ProfileWelcome";
import "./style.css";


function Profile() {
return (
    <>
    <NavBar/>
<div className="Container">

<ProfileWelcome name={"Andre"}/>

<div className="row">
    <div className="col-1 col-md-6 col-lg-6">
    <ProfileCard/>

    </div>

    <div className="col-1 col-md-6 col-lg-6">
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
