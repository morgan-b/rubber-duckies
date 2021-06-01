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
  });

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>

          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>

          <Route
            exact
            path={"/home"}
            render={() => (userloggedin ? <Homepage /> : <Login />)}
          />

          <Route
            exact
            path={"/welcomeuser"}
            render={() => (userloggedin ? <WelcomeUser /> : <Login />)}
          />

          <Route
            exact
            path={"/assessment"}
            render={() => (userloggedin ? <Assessment /> : <Login />)}
          />

          <Route 
          exact 
          path={"/profile"}
          render={() => (cgloggedin ? <Profile /> : <Login />)}

          />

          <Route 
          exact 
          path={"/adduser"}
          render={() => (cgloggedin ? <AddUser /> : <Login />)}
          />
          

          <Route 
          exact 
          path={"/userdetails"}
          render={() => (cgloggedin ? <UserDetails /> : <Login />)}

          />
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
