import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import AddUserForm from '../components/AddUserForm'
import NavBar from '../components/NavBar';
import "./style.css";
import Apiroutes from '../utils/Apiroutes';

function AddUser() {

const [addUser, setAddUser] = useState({
  username:"",
  userid:""
});

const history = useHistory();

//save inputted user data to state
const handleChange = (e) => {
  const {name, value} = e.target;
  setAddUser ({...addUser, [name]:value})
}

const handleAddUser = (e) => {
  e.preventDefault();
  console.log(addUser)

 Apiroutes.checkUser(addUser)
 .then(res => {
   console.log("user found!");
   console.log(res);

      Apiroutes.addUser(addUser)
      .then(res => {

       console.log("User added!");
       history.push("/profile");
       }).catch (err => console.log(err));

 })
 .catch(err => console.log(err));

}

    return (
        <>
        <NavBar/>
        <div className="row text-center justify-content-center m-5">
        <div className="col-md-5 col-sm-12 border localCard">

          <AddUserForm
          handleChange={handleChange}
          handleAddUser={handleAddUser}
          />

        </div>
        </div>
        </>
    )
}

export default AddUser;
