import React, { useState } from "react";
import HomeCard from "../components/HomeCard";
import popupS from "popups";
import placeholder from "../assets/blue.png";
import NavBar from "../components/NavBar";



function onClick(props){
    popupS.modal({
        title:   'Test',
        content: {
            tag: 'test',
            src: {placeholder}
            // props.communication_image
        }
    });
}
function Homepage() {
  return (
    <>
    <NavBar/>
      <div className="container">
    <div className="row row-cols-xs-3 row-cols-sm-3 row-cols-md-3">

        <div className="col">
          <HomeCard onClick={onClick}></HomeCard>
        </div>
        <div className="col">
          <HomeCard></HomeCard>
        </div>
        <div className="col">
          <HomeCard></HomeCard>
        </div>
        <div className="col">
          <HomeCard></HomeCard>
        </div>
        <div className="col">
        <HomeCard></HomeCard>
        </div>
        <div className="col">
        <HomeCard></HomeCard>
        </div>

    </div>
    </div>
    </>
  );
}
export default Homepage;
