import React from "react";



export default function AssessCard(props) {
  return (
    <div className="card text-center">

          <a className="btn btn-light" 
          >
          <img
          key={props.id}
          // alt={props.title}
          className="card-img"
          src={props.thumbnail}
          alt="image"
          ></img>
          </a>

         <button
          className="btn btn-light"
          // title={props.title}
          onClick={props.onClick}
         >
          I'm 
         </button>
      
    </div>
  );
}

