import axios from "axios";

// eslint-disable-next-line
export default {
    //created 2 separate routes for user or caregiver login as the post 
    //request will be makde to different tables depending on user type
 userLogin: function (userData) {
     return axios.post("api/userlogin", userData)
 },
 cgLogin: function (cgData) {
     return axios.post("api/cglogin", cgData)
 },
 userSignup: function (userData) {
     return axios.post("api/usersignup", userData)
 },
 cgSignup: function (cgData) {
    return axios.post("api/cgsignup", cgData)
}
}