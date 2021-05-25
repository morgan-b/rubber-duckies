import React from "react";

function AssessWrapper(props) {
  return (
    <section className="container">
      <div className="row">
        <h2 className="col-5">{props.emotionNeeds}</h2>
        <div className="col-7">
          <form>
            <div className="row g-3 justify-content-end">
              <div className="col-auto">
                <input
                  type="text"
                  id="inputtext"
                  className="form-control"
                  onChange={props.onChange}
                ></input>
              </div>
              <div className="col-auto">
                <button className="btn btn-light" onClick={props.onClick}>
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row row-cols-xs-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3">
        {props.children}
      </div>
    </section>
  );
}

export default AssessWrapper;
