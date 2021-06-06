import React from "react";

export default function AssessCard(props) {
  return (
    <section className="card text-center assessCard">
      <button
        className="btn card-img"
        onClick={(e) => props.onSave(e, props.link)}
      >
        <img
          key={props.id}
          className="card-img"
          src={props.thumbnail}
          alt="image"
        ></img>
      </button>
    </section>
  );
}
