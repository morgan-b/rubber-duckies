import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          {userloggedin ? <Homepage /> : <Login />}
        </Route>

        <Route exact path={"/welcomeuser"}>
          {userloggedin ? <WelcomeUser /> : <Login />}


        </Route>

        <Route exact path={"/assessment"}>
          {userloggedin ? <Assessment /> : <Login />}
        </Route>

        <Route exact path={"/profile"}>
          {cgloggedin ? <Profile /> : <Login />}

        </Route>

        <Route exact path={"/adduser"}>
          {cgloggedin ? <AddUser /> : <Login />}

        </Route>

        <Route exact path={"/userdetails"}>
          {cgloggedin ? <UserDetails /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
