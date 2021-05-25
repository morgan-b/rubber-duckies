import React from "react";

function AssessWrapper(props) {
  return (
    <section className="container">
      <div className="row">
        <h2 className="col-12 text-center">{props.emotionNeeds}</h2>
      </div>
      <div className="row">
        <div className="row g-3 justify-content-end">
          <div className="col-8">
            <p>
              Choose color below, use text: <button className="btn btn-dark btn-sm localBtn" onClick={props.onClick}>
              {props.emotionNeeds}</button> or search for an image
            </p>
          </div>
          <div className="col-4">

            <form className="row">
              <div className="col-auto">
                <input
                  type="text"
                  id="inputtext"
                  className="form-control mb-2"
                  onChange={props.onChange}
                ></input>
              </div>
              <div className="col-auto">
                <button className="btn btn-dark localBtn" onClick={props.onSearch}>
                  Image Search
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
      <div className="row"></div>
      <div className="row row-cols-1 row-cols-md-3 g-3 row-cols-lg-3">
        {props.children}
      </div>
    </section>
  );
}

export default AssessWrapper;
