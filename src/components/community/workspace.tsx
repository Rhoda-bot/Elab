import React from 'react';

function Workspace() {
  return (
    <div className="workspace">
      <div className="container">
        <div className="row justify-content-center mx-auto">
          <div className="col-md-6 p-2 p-lg-4">
            <div className="workspace--img1 col-6 w-100 my-3 my-lg-5">
              <div className="workspace--subtitle">
                Conducive Workspace
              </div>
            </div>
            <div className="workspace--img2 col-6 w-100 my-3 my-lg-5">
              <div className="workspace--subtitle">
                Regular Power Supply
              </div>
            </div>
          </div>
          <div className="col-md-6 p-2 p-lg-4">
            <div className="workspace--img3 col-6 w-100 my-3 my-lg-5">
              <div className="workspace--subtitle">
                Office Address Usage
              </div>
            </div>
            <div className="workspace--img4 col-6 w-100 my-3 my-lg-5">
              <div className="workspace--subtitle">
                Internet Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Workspace;
