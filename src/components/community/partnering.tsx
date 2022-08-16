import React from 'react';

function Partnering() {
  return (
    <div className="partnering">
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-md-6 p-5">
          <div className="partnering__description--title">
            Interested in partnering with us or want to invest?
          </div>
          <button className="partnering__description--btn mt-4" type="button">CTA Stays Here</button>
        </div>
        <div className="col-md-6">
          <img src="/images/program/partnership.png" alt="" className="partnering--img" />
        </div>
      </div>
    </div>
  // </div>
  );
}
export default Partnering;
