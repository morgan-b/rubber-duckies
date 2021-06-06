import React from "react";

export default function ProfileCard(props) {
  return (
    <section key={props.id} className="card m-3 text-center p-5 profileCard">
      <section
        onClick={(e) => props.handleClick(e, props.user)}
        className="btn"
      >
        <h1 className="card-title mt-2 mb-2">
          {props.firstname} {props.lastname}
        </h1>
      </section>
    </section>
  );
}
