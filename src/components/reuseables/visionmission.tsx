import React from 'react';

function VisionMission() {
  return (
    <div className="visionmission py-5">
      <div className="container py-lg-5">
        <div className="row text-center ">
          <div className="col-md-6 my-2">
            <div className=" visionmission__card h-100">
              <img src="/images/about/vision.png" alt="" className=" my-2 my-lg-3 img-fluid visionmission__card--img" />
              <div className="card-body px-3 px-md-5">
                <h5 className="visionmission__card--title"> Vision (Our over-aching focus)</h5>
                <p className="visionmission__card--text">
                  To see recilient innovation ecosystems emerge in
                  underserved university communities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="visionmission__card h-100">
              <img src="/images/about/mission.png" alt="" className=" my-2 my-lg-3 img-fluid visionmission__card--img" />
              <h5 className="visionmission__card--title">Mission (How we do this)</h5>
              <p className="visionmission__card--text ">
                We identity key stakeholders, educate, resource, and release or
                commission them in order to facilitate economic abundance and
                virtuous culture creation for human flourishing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VisionMission;
