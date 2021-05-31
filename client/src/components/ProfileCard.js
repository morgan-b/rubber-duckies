import React from "react";

export default function ProfileCard(props) {
  return (
    <div className="card m-3 text-center profileCard">
         <div 
         onClick={(e)=> props.handleClick(e, props.user)}
         className="btn">
          <h5 key={1 + props.id} className="card-title mt-2 mb-2">
            {props.firstname} {props.lastname}
          </h5>
          </div>
          </div>
 
      
   
  );
}

