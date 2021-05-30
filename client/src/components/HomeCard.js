import React from "react";





function HomeCard(props) {
  return (
    <div key={props.id} className="card text-center assessCard">
      <p className="card-header">
        {props.title}
      </p>


          <a className="btn btn-light card-img" onClick={(e) => props.onClick(e, props.title, props.thumbnail)}>
          <img
          alt={props.title}
          className="card-img"
          src={props.thumbnail}
          ></img>
          </a>

    </div>
  );
}

export default HomeCard;
