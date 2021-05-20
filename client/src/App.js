import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/nav";
import Profile from "./pages/Profile";


function App() {
  return (

    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/","/home"]}>
            <Homepage />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;