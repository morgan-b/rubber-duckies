import axios from "axios";

// eslint-disable-next-line
export default {
    
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

checkUser: function (userid) {
    return axios.get(`api/page/user/${userid}`)
},

addUser: function (addUser) {
    return axios.put("api/adduser", addUser)
},

getCaregiver: function () {
    return axios.get("api/caregiver")
 },
 
populateProfile: function () {
   return axios.get("api/page/profile")
},

getUserData: function () {
    return axios.get("api/page/useremotions")
},

saveUserAction: function (userinput) {
    return axios.post("api/useraction", userinput)
},

userDetails: function (userid) {

    return axios.get(`api/useraction/find/${userid}`)

},

getAuth: function () {
    return axios.get("/api/users/getauth")
},

 logOut:  function () {
     return axios.post("api/users/logout")
 }



}