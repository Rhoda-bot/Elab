import React from 'react';

function VisionMission() {
  return (
    <div className="visionmission">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 visionmission__description">
            <img src="/images/about/vision.png" alt="" className="img-fluid visionmission__description--img" />
            <div className="visionmission__description--subtitle">Vision (Our over-aching focus)</div>
            <p className="visionmission__description--text p-3">
              To see recilient innovation ecosystems emerge in
              underserved university communities.
            </p>
          </div>
          <div className="col-md-6 visionmission__description">
            <img src="/images/about/mission.png" alt="" className="img-fluid visionmission__description--img" />
            <div className="visionmission__description--subtitle">Mission (How we do this)</div>
            <p className="visionmission__description--text p-3">
              We identity key stakeholders, educate, resource, and release or
              commission them in order to facilitate economic abundance and
              virtuous culture creation for human flourishing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisionMission;
