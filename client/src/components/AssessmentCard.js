import React from "react";



export default function AssessCard(props) {
  return (
    <div className="card text-center assessCard">

          <button className="btn card-img" 
          onClick={props.onSave}
          >
          <img
          key={props.id}
          // alt={props.title}
          className="card-img"
          src={props.thumbnail}
          alt="image"
         
          ></img>
          </button>

      
      
    </div>
  );
}

