import React from "react";

export default function ProfileCard(props) {
  return (
    <div className="card m-3 text-center">
  
          <h5 key={1 + props.id} className="card-title">
            {props.firstname}
          </h5>
          <h5 key={2 + props.id} className="card-title">
            {/*{props.user_type}*/}
          </h5>
          <p key={3 + props.id} className="card-text">
            {props.lastname}
          </p>
          {/*<a
            className="btn btn-light homebtns"
            key={4 + props.id}
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
           Placeholder
          </a>*/}
          </div>
 
      
   
  );
}

