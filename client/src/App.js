import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Assessment from "./pages/Assessment";
import AddUser from "./pages/AddUser";
import WelcomeUser from "./pages/WelcomeUser";
import UserDetails from "./pages/userDetails";
import ErrorPage from "./pages/ErrorPage";
import CgLogin from "./pages/CgLogin";
import { UserContext } from "./utils/AuthContext";

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [cgloggedin, setcgLoggedin] = useState(false);

  console.log(process.env.NODE_ENV);
  function logIn(data) {
    setLoggedin(data);
    console.log("LOGIN CONTEXT", loggedin);
  }

  function cgLogIn(data) {
    setcgLoggedin(data);
    console.log("CG CONTEXT", cgloggedin);
  }

  return (
    <UserContext.Provider value={{ loggedin, cgloggedin, logIn, cgLogIn }}>
      <Router>
        <Switch>
          <Route exact path={"/#/signup"}>
            <Signup />
          </Route>

          <Route exact path={["/", "/#/login"]}>
            <Login />
          </Route>

          <Route exact path={"/#/cglogin"}>
            <CgLogin />
          </Route>

          <Route exact path={"/#/home"}>
            {loggedin ? <Homepage /> : <Redirect from="/#/home" to="/#/login" />}
          </Route>

          <Route exact path={"/#/welcomeuser"}>
            {loggedin ? (
              <WelcomeUser />
            ) : (
              <Redirect from="/#/welcomeuser" to="/#/login" />
            )}
          </Route>

          <Route exact path={"/#/assessment"}>
            {loggedin ? <Assessment /> : <Redirect to="/#/login" />}
          </Route>

          <Route exact path={"/#/profile"}>
            {cgloggedin ? <Profile /> : <Login />}
          </Route>

          <Route exact path={"/#/adduser"}>
            {cgloggedin ? <AddUser /> : <Redirect to="/#/login" />}
          </Route>

          <Route exact path={"/#/userdetails"}>
            {cgloggedin ? <UserDetails /> : <Redirect to="/#/login" />}
          </Route>


        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
