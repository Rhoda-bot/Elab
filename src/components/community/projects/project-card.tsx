import React from 'react';

function ProjectCards() {
  return (
    <div className="projectcards py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3" />
          <div className="col-md-3" />
          <div className="col-md-3" />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-4  projectcards__description--card p-3">
            <div className="card border-0">
              <img src="/images/program/project1.png" alt="" className="img-fluid" />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center ">
                <h4 className="card-title">Project title goes here</h4>
                <div className="link d-flex">
                  <button type="button">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 projectcards__description p-3">
            <div className="card border-0 projectcards__description--card">
              <img src="/images/program/project2.png" alt="" className="img-fluid" />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="card-title">Project title goes here</h4>
                <div className="link d-flex">
                  <button type="button">Learn more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 projectcards__description--card p-3">
            <div className="card border-0">
              <img src="/images/program/project3.png" alt="" className="img-fluid" />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="card-title">Project title goes here</h4>
                <div className="link d-flex">
                  <button type="button">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;
