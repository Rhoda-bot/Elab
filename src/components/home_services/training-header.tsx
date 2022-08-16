import React from 'react';

function TrainingHeader() {
  return (
    <div className="header py-5">
      <div className="container">
        <div className="row text-center justify-content-center align-items-center">
          <div className="header--title">
            Header Text for Training
            <br />
            Title Stays Here

          </div>
          <div className="pt-4">
            <button type="button" className="header--btn col-md-2">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TrainingHeader;
