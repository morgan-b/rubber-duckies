import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Assessment from "./pages/Assessment";
import AddUser from "./pages/AddUser";
import WelcomeUser from "./pages/WelcomeUser";
import UserDetails from "./pages/userDetails";


function App() {
  const [userloggedin, setUserloggedin] = useState(false);
  const [cgloggedin, setCgloggedin] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("user");
    const cgAuth = localStorage.getItem("caregiver");
    console.log(auth);

    setUserloggedin(auth);
    setCgloggedin(cgAuth);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path={"/signup"}>
          <Signup />
        </Route>

        <Route exact path={["/", "/login"]}>
          <Login />
        </Route>

        <Route exact path={"/home"}>
          {userloggedin ? <Homepage /> : <Redirect  from="/home" to ="/login" />}
    
        </Route>

        <Route exact path={"/welcomeuser"}>
          {userloggedin ? <WelcomeUser /> :  <Redirect from="/welcomeuser" to ="/login"/>}


        </Route>

        <Route exact path={"/assessment"}>
          {userloggedin ? <Assessment /> : <Redirect to ="/login"/>}
          {/* <Assessment /> */}
        </Route>

        <Route exact path={"/profile"}>
          {cgloggedin ? <Profile /> : <Login />}

        </Route>

        <Route exact path={"/adduser"}>
          {cgloggedin ? <AddUser /> : <Redirect to ="/login"/>}
 
        </Route>

        <Route exact path={"/userdetails"}>
          {cgloggedin ? <UserDetails /> : <Redirect to ="/login"/>}

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
