import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Assessment from "../pages/Assessment";
import AddUser from "../pages/AddUser";
import WelcomeUser from "../pages/WelcomeUser";
import UserDetails from "../pages/userDetails";

export const Auth ={
    userlog: true,
    cglog:false
};

const RequireAuth = ({children}) => {
    if(!Auth.userlog) {
        return <Redirect to={"/login"}/>
    }

    return children;
}

const RequireCg = ({children}) => {
    if(!Auth.cglog) {
        return <Redirect to={"/login"}/>
    }
    return children;
}

function AppRouter() {
    return (
        <>
          <Switch>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>

          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>

<RequireCg>
          <Route 
          exact 
          path={"/profile"}>
          {/* render={() => (cgloggedin ? <Profile /> : <Login />)} /> */}
          <Profile/>
           </Route>

          <Route 
          exact 
          path={"/adduser"}>
          {/* render={() => (cgloggedin ? <AddUser /> : <Login />)}/> */}
         <AddUser/>
          </Route>

          <Route 
          exact 
          path={"/userdetails"}>
           {/* render={() => (cgloggedin ? <UserDetails /> : <Login />)}/> */}
          <UserDetails />
          </Route>
          </RequireCg>

    <RequireAuth>   
          <Route
            exact
            path={"/home"}>
            {/* render={() => (userloggedin ? <Homepage /> : <Login />)}/> */}
         <Homepage/>
        </Route>

          <Route
            exact
            path={"/welcomeuser"}>
            {/* render={() => (userloggedin ? <WelcomeUser /> : <Login />)}/> */}
           <WelcomeUser />
             </Route>

          <Route
            exact
            path={"/assessment"}>
            {/* render={() => (userloggedin ? <Assessment /> : <Login />)}/>  */}
            <Assessment/>
            </Route>

            </RequireAuth>
            
        </Switch>  
        </>
    )
}

export default AppRouter
