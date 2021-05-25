import React from 'react'
import AddUserForm from '../components/AddUserForm'
import NavBar from '../components/NavBar';
import "./style.css";

function AddUser() {
    return (
        <>
        <NavBar/>
        <div className="row text-center justify-content-center m-5">
        <div className="col-md-5 col-sm-12 border localCard">

          <AddUserForm/>

        </div>
        </div>
        </>
    )
}

export default AddUser;
