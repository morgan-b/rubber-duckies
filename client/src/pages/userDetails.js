import React, { useState, useEffect, Component } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import logo from "../assets/logo-duckies.png";
import Apiroutes from "../utils/Apiroutes";
import BarChart from "../components/UserChart";
import { RadialChart } from "react-vis";
import "./style.css"

function userDetails() {
  const [userData, setUserData] = useState([]);
  const [actions, setActions] = useState([]);
  const [timeStamp, setTimeStamps] = useState([]);

  //uselocation hook to get data from one page to the next.
  //used this to pass on user data depending on which user is clicked on
  const { state } = useLocation();

  console.log(state);

  useEffect(() => {
    setUserData(state);
    let userid = state.userid;
    console.log(userid);

    populateUserDetails(userid);
  }, []);

  const populateUserDetails = (userid) => {
    Apiroutes.userDetails(userid)

      .then((res) => {
        console.log("user found!");

        setActions(res.data);
        setTimeStamps(res.data);

        console.log(res.data);
      })

      .catch((err) => console.log(err));
  };

  //function to populate piechart using react-vis npm
  const pieChart = () => {
    let emData = {
      happy: 0,
      sad: 0,
      nervous: 0,
    };

    actions.forEach((action) => {
      if (action.userInput === "Happy") {
        emData.happy += 1;
      } else if (action.userInput === "Sad") {
        emData.sad += 1;
      } else if (action.userInput == "Nervous") {
        emData.nervous += 1;
      }
    });
    console.log(emData);

    return [
      { angle: emData.happy, label: "Happy", className:"piechart" },
      { angle: emData.sad, label: "Sad", className:"piechart"},
      { angle: emData.nervous, label: "Nervous", className:"piechart" },
    ];
  };

//function to populate piechart using react-vis npm
const pieChart2 = () => {
  let needsData = {
    restroom: 0,
    thirsty: 0,
    hungry: 0,
  };

  actions.forEach((action) => {
    if (action.userInput === "Restroom") {
      needsData.restroom += 1;
    } else if (action.userInput === "Thirsty") {
      needsData.thirsty += 1;
    } else if (action.userInput == "Hungry") {
      needsData.hungry += 1;
    }
  });
  console.log(needsData);

  return [
    { angle: needsData.restroom, label: "Restroom", className:"piechart" },
    { angle: needsData.thirsty, label: "Thirsty", className:"piechart" },
    { angle: needsData.hungry, label: "Hungry", className:"piechart" },
  ];
};

  return (
    <>
      <NavBar />
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt="logo"
          style={{ width: "100px" }}
        />
        <h1 className="display-5 fw-bold">
          {userData.firstname} {userData.lastname}
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">View reports below</p>
        </div>
      </div>

      <div className="container text-center justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr key="8">
              <th key="6" scope="col">
                Needs
              </th>
              <th key="7" scope="col">
                Date
              </th>
              <th key="8" scope="col">
                Time Stamp
              </th>
            </tr>
          </thead>

          <tbody>
            {actions.length ? (
              actions.map((action) => (
                <tr key={action.userActionDetailId + 3}>
                  <td key={action.userActionDetailId + 1}>
                    {" "}
                    {action.userInput}
                  </td>
                  <td key={action.userActionDetailId + 2}>
                    {new Date(action.date_created).toString().substring(0, 15)}
                  </td>
                  <td key={action.userActionDetailId + 2}>
                    {new Date(action.date_created).toString().substring(15, 57)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td key="2"> awaiting new action</td>
                <td key="3"> awaiting new action</td>
                <td key="4"> awaiting new action</td>
              </tr>
            )}
          </tbody>
        </table>

       {actions.length ? (
         <>
        <div className="row">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
            <div className="col">
              <RadialChart
                data={pieChart()}
                width={300}
                height={300}
                showLabels={true}
                labelsAboveChildren={true}
              />
            </div>
            <div className="col">
              <RadialChart
                data={pieChart2()}
                width={300}
                height={300}
                showLabels={true}
                labelsAboveChildren={true}
              />
            </div>
          </div>
        </div>

        <BarChart data={timeStamp}></BarChart>
        </>
        ):(
          <h4>{userData.firstname} has no actions to display yet!</h4>
        )}
      </div>
    </>
  );
}

export default userDetails;
