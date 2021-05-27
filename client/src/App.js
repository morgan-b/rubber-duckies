import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Assessment from "./pages/Assessment";
import AddUser from "./pages/AddUser";
import WelcomeUser from "./pages/WelcomeUser";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Homepage />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/assessment"}>
            <Assessment />
          </Route>
          <Route exact path={"/adduser"}>
            <AddUser />
          </Route>
          <Route exact path={"/welcomeuser"}>
            <WelcomeUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
