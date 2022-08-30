import React from 'react';

function Teams() {
  return (
    <div className="teams">
      <div className="container">
        <div className="row text-center justify-content-center mx-auto">
          <div className="teams--title">Meet the eLab Team </div>
          <p className="teams--text">
            Our team of talented minds, creatives, strategists, and
            managers
            {' '}
            <br />
            responsible for building, resourcing and equipping
            the community.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <img src="/images/about/abouta.png" alt="" className="img-fluid" />
          </div>
          <div className="col-md-10">
            <img src="/images/about/aboutb.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Teams;
