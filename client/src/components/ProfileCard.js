import React from "react";

export default function ProfileCard(props) {
  return (
    <div key={props.id}className="card m-3 text-center p-5 profileCard">
         <div 
         onClick={(e)=> props.handleClick(e, props.user)}
         className="btn">
          <h1 className="card-title mt-2 mb-2">
            {props.firstname} {props.lastname} 
          </h1>
          </div>
          </div>
 
      
   
  );
}

