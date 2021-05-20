import React from "react";

export function AssessCard(props) {
  return (
    <div className="card">
    <div className="row">
  
        <img
          key={5 + props.id}
          alt={props.title}
          className="card-img"
          src={props.imageLink}
        ></img>
      


          <h5 key={1 + props.id} className="card-title">
            {props.title}
          </h5>
          <h5 key={2 + props.id} className="card-title">
            {props.author}
          </h5>
          <p key={3 + props.id} className="card-text">
            {props.description}
          </p>
          <a
            className="btn btn-light homebtns"
            key={4 + props.id}
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            Buy Here
          </a>
          </div>
           </div>
 
      
   
  );
}

export function AssessCardBtn(props) {
  return (
    <button
      className="btn btn-light"
      title={props.title}
      onClick={props.onClick}
    >
      Save Book
    </button>
  );
}