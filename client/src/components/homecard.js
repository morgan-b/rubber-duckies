import React from "react";
import placeholder from "../assets/blue.png";



function HomeCard(props) {
  return (
    <div className="card text-center">
      <p key={1 + props.id} className="card-header">
        Placeholder Feeling/Action {props.title}
      </p>


          <a className="btn btn-light" onClick={props.onClick}>
          <img
          key={5 + props.id}
          alt={props.title}
          className="card-img"
          src={placeholder}
          //   {props.imageLink}
          ></img>
          </a>

         <button
          className="btn btn-light"
          title={props.title}
          onClick={props.onClick}
         >
          I'm {props.communication}
         </button>
      
    </div>
  );
}

export default HomeCard;
