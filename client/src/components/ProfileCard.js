import React from "react";
import {Link} from 'react-router-dom';

export default function ProfileCard(props) {
  return (
    <div className="card m-3 text-center profileCard">
         <Link className="btn" to="/userdetails">
          <h5 key={1 + props.id} className="card-title mt-2 mb-2">
            {props.firstname} {props.lastname}
          </h5>
          </Link>
          </div>
 
      
   
  );
}

