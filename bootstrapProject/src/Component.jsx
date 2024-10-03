import React from "react";

function Component() {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-7">
            <input type="text" placeholder="Enter To-do"  />
          </div>
          <div className="col-3">
            <input type="date" />
          </div>
          <button type="button" className="col-2 btn btn-success">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Component;
