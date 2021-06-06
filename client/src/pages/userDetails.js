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
  let theEvent = [];

  console.log(state);

  useEffect(() => {
    setUserData(state);
    let userid = state.userid;

    populateUserDetails(userid);
  }, []);

  const populateUserDetails = (userid) => {
    Apiroutes.userDetails(userid)

      .then((res) => {
        console.log("user found!");

        setActions(res.data);
        setTimeStamps(res.data);
        setCalendar(res.data);
      })

      .catch((err) => console.log(err));
  };

  const setCalendar = async (datas) => {
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
      setTimeout(() => {
        setEvents(theEvent);
      }, 100);
    });
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

    return lineData;
  };
  lineChart();

  return (
    <>
      <NavBar />
      <section className="px-4 py-5 my-5 text-center userHeader">
        <img
          className="d-block mx-auto mb-4"
          src={logo}
          alt="logo"
          style={{ width: "100px" }}
        />
        <h1 className="display-5 fw-bold">
          {userData.firstname} {userData.lastname}
        </h1>
        <header className="col-lg-6 mx-auto">
          <p className="lead mb-4">View reports below</p>
        </header>
      </section>

      <section className="container text-center justify-content-center">
        {actions.length ? (
          <article>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </article>
        ) : (
          <h4>{userData.firstname} has no actions to display yet!</h4>
        )}

        {actions.length ? (
          <>
            <section className="row">
              <section className="col">
                <h3>Overview</h3>
                <br></br>
                <article className="d-flex justify-content-center">
                  <FlexibleXYPlot height={300} xType="ordinal">
                    <VerticalBarSeries
                      className={"barchart"}
                      data={lineChart()}
                    />
                    <XAxis />
                    <YAxis />
                  </FlexibleXYPlot>
                </article>
              </section>

              <section className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                <section className="col">
                  <h3>Emotions</h3>
                  <br></br>
                  <article className="d-flex justify-content-center">
                    <RadialChart
                      data={pieChart()}
                      width={300}
                      height={300}
                      showLabels={true}
                      labelsAboveChildren={true}
                    />
                  </article>
                </section>

                <article className="col">
                  <h3>Actions</h3>
                  <br></br>
                  <article className="d-flex justify-content-center">
                    <RadialChart
                      data={pieChart2()}
                      width={300}
                      height={300}
                      showLabels={true}
                      labelsAboveChildren={true}
                    />
                  </article>
                </article>
              </section>
            </section>
          </>
        ) : (
          <h4>{userData.firstname} has no actions to display yet!</h4>
        )}
      </section>
    </>
  );
}

export default userDetails;
