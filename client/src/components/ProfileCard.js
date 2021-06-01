import React from "react";

export default function ProfileCard(props) {
  return (
    <div className="card m-3 text-center p-5 profileCard">
         <div 
         onClick={(e)=> props.handleClick(e, props.user)}
         className="btn">
          <h1 key={1 + props.id} className="card-title mt-2 mb-2">
            {props.firstname} {props.lastname}
          </h1>
          </div>
          </div>
 
      
   
  );
}

