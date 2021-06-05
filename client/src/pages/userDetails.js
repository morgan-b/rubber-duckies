import React, { useState, useEffect, Component } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import logo from "../assets/logo-duckies.png";
import Apiroutes from "../utils/Apiroutes";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  RadialChart,
  VerticalBarSeries,
  XYPlot,
  XAxis,
  YAxis,
  makeWidthFlexible,
} from "react-vis";
import "./style.css";

function userDetails() {
  const localizer = momentLocalizer(moment);
  const [userData, setUserData] = useState([]);
  const [actions, setActions] = useState([]);
  const [timeStamp, setTimeStamps] = useState([]);
  const [events, setEvents] = useState([]);
  const FlexibleXYPlot = makeWidthFlexible(XYPlot);

  //uselocation hook to get data from one page to the next.
  //used this to pass on user data depending on which user is clicked on
  const { state } = useLocation();
  let theEvent = []

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
        // console.log("user found!");

        setActions(res.data);
        setTimeStamps(res.data);
        console.log(res.data);
        setCalendar(res.data);
      })

      .catch((err) => console.log(err));
  };

  const setCalendar = (datas) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    console.log(datas);
    datas.map((data) => {
      let title = data.userInput;
      let year = parseInt(
        new Date(data.date_created).toLocaleString("en", { year: "numeric" })
      );
      let month = months.indexOf(
        new Date(data.date_created).toLocaleString("en-us", { month: "long" })
      );
      let day = parseInt(
        new Date(data.date_created).toLocaleString("en", { day: "numeric" })
      );
      let hour = parseInt(
        new Date(data.date_created).toString().substring(16, 18)
      );
      let minute = parseInt(
        new Date(data.date_created).toLocaleString("en", { minute: "numeric" })
      );

      let newEvent = {
        title: title,
        allDay: false,
        start: new Date(year, month, day, hour, minute),
        end: new Date(year, month, day, hour, minute),
      };

      theEvent.push(newEvent);
      console.log(theEvent);
      setEvents(theEvent)
    });
  };

  // function seeCal() {
  //   console.log(events)
  // }

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
      { angle: emData.happy, label: "Happy", className: "piechart" },
      { angle: emData.sad, label: "Sad", className: "piechart" },
      { angle: emData.nervous, label: "Nervous", className: "piechart" },
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
      { angle: needsData.restroom, label: "Restroom", className: "piechart" },
      { angle: needsData.thirsty, label: "Thirsty", className: "piechart" },
      { angle: needsData.hungry, label: "Hungry", className: "piechart" },
    ];
  };

  const lineChart = () => {
    let allData = {
      restroom: 0,
      thirsty: 0,
      hungry: 0,
      happy: 0,
      sad: 0,
      nervous: 0,
    };

    actions.forEach((action) => {
      if (action.userInput === "Restroom") {
        allData.restroom += 1;
      } else if (action.userInput === "Thirsty") {
        allData.thirsty += 1;
      } else if (action.userInput == "Hungry") {
        allData.hungry += 1;
      } else if (action.userInput === "Happy") {
        allData.happy += 1;
      } else if (action.userInput == "Sad") {
        allData.sad += 1;
      } else if (action.userInput == "Nervous") {
        allData.nervous += 1;
      }
    });

    let lineData = [
      {
        x: "restroom",
        y: allData.restroom,
        label: "Restroom",
        className: "barchart",
      },
      {
        x: "thirsty",
        y: allData.thirsty,
        label: "Thirsty",
        className: "barchart",
      },
      {
        x: "hungry",
        y: allData.hungry,
        label: "Hungry",
        className: "barchart",
      },
      { x: "happy", y: allData.happy, label: "Happy", className: "barchart" },
      { x: "sad", y: allData.sad, label: "Sad", className: "barchart" },
      {
        x: "nervous",
        y: allData.nervous,
        label: "Nervous",
        className: "barchart",
      },
    ];
    console.log(allData);

    //  const newDates = []

    // actions.forEach((action) =>{
    //   newDates.push(new Date(action.date_created).toLocaleString())

    // })

    // console.log(newDates)

    // const newDatesMap = newDates.map((k,y) => ({x: k}));
    // console.log(newDatesMap)
    // const Final =[]
    // newDatesMap.forEach((d) => {Final.push(d + ",y:" +actions.userInput) })
    // console.log(Final)

    return lineData;
  };
  lineChart();

  return (
    <>
      <NavBar />
      <div className="px-4 py-5 my-5 text-center userHeader">
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
        {actions.length ? (
          <div>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
        ) : (
          <h4>{userData.firstname} has no actions to display yet!</h4>
        )}

        {actions.length ? (
          <>
            <div className="row">
              <div className="col">
                <h3>Overview</h3>
                <br></br>
                <div className="d-flex justify-content-center">
                  <FlexibleXYPlot height={300} xType="ordinal">
                    <VerticalBarSeries
                      className={"barchart"}
                      data={lineChart()}
                    />
                    <XAxis />
                    <YAxis />
                  </FlexibleXYPlot>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                <div className="col">
                  <h3>Emotions</h3>
                  <br></br>
                  <div className="d-flex justify-content-center">
                    <RadialChart
                      data={pieChart()}
                      width={300}
                      height={300}
                      showLabels={true}
                      labelsAboveChildren={true}
                    />
                  </div>
                </div>

                <div className="col">
                  <h3>Actions</h3>
                  <br></br>
                  <div className="d-flex justify-content-center">
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
            </div>
          </>
        ) : (
          <h4>{userData.firstname} has no actions to display yet!</h4>
        )}
      </div>
    </>
  );
}

export default userDetails;
