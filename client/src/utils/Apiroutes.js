import axios from "axios";

// eslint-disable-next-line
export default {
    //created 2 separate routes for user or caregiver login as the post 
    //request will be makde to different tables depending on user type
 userLogin: function (userData) {
     return axios.post("api/users/userlogin", userData)
 },
 cgLogin: function (cgData) {
     return axios.post("api/users/cglogin", cgData)
 },
 userSignup: function (userData) {
     return axios.post("api/users/usersignup", userData)
 },
 cgSignup: function (cgData) {
    return axios.post("api/users/cgsignup", cgData)
},

assessmentSave: function (userChoice) {
    return axios.put(`api/assess`, userChoice)
},

checkUser: function (addUser) {
    return axios.get("/", addUser)
},

addUser: function (addUser) {
    return axios.put("api/adduser", addUser)
},

getCaregiver: function (email) {
    return axios.get("/caregiver", email)
 },
 
populateProfile: function () {
   return axios.get("/profile")
},



}