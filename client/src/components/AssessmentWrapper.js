import React from "react";

function AssessWrapper(props) {
  return (
    <section className="container">
      <section className="row">
        <h2 className="col-12 text-center">{props.emotionNeeds}</h2>
      </section>
      <section className="row">
        <section className="row g-3 justify-content-end">
          <section className="col-8">
            <p>
              Choose color below, use text:{" "}
              <button
                link={props.link}
                onClick={(e) => props.onSave(e, props.link)}
                className="btn btn-dark btn-sm localBtn"
              >
                {props.emotionNeeds}
              </button>{" "}
              or search for an image
            </p>
          </section>
          <section className="col-4">
            <form className="row">
              <section className="col-auto">
                <input
                  type="text"
                  id="inputtext"
                  className="form-control mb-2"
                  onChange={props.onChange}
                ></input>
              </section>
              <section className="col-auto">
                <button
                  className="btn btn-dark localBtn"
                  onClick={props.onSearch}
                >
                  Image Search
                </button>
              </section>
            </form>
          </section>
        </section>
      </section>
      <section className="row"></section>
      <section className="row row-cols-1 row-cols-md-3 g-3 row-cols-lg-3">
        {props.children}
      </section>
    </section>
  );
}

export default AssessWrapper;
