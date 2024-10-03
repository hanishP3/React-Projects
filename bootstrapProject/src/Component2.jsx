import React from "react";

function Component2() {
  return (
    <>
      <div className="container ">
        <div className="row align-items-start">
          <div className="col-7">Buy milk</div>
          <div className="col-3">4/09/2024</div>
          <button type="button" className="col-2 btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      <div className="container ">
        <div className="row align-items-start">
          <div className="col-7">Buy Biscuit</div>
          <div className="col-3">16/02/2024</div>
          <button type="button" className="col-2 btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Component2;
