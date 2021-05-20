import React, { useState } from "react";
import HomeCard from "../components/homecard";
import popupS from "popups";
import placeholder from "../assets/blue.png";



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
      <div className="container">
    <div className="row row-cols-xs-3 row-cols-sm-3 row-cols-md-3  g-3">

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
  );
}
export default Homepage;
