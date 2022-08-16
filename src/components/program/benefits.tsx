import React from 'react';

function Benefits() {
  return (
    <>
      <div className="benefits">
        <div className="container">
          <div className="row text-center align-items-center justify-content-center mx-auto">
            <div className="benefits--title">Benefits of Joining the Community</div>
            <p className="benefits--text">
              As a Trybe member, your benefits are:
            </p>
            <div className="col-md-12 ">
              <div className="row justify-content-center mx-auto">
                <div className="col-md-3">
                  <img src="/images/about/mission.png" alt="" className="img-fluid benefits--img" />
                  <p className="benefits--subtitle">
                    Free online masterclasses
                  </p>
                </div>
                <div className="col-md-3">
                  <img src="/images/about/vision.png" alt="" className="img-fluid benefits--img" />
                  <p className="benefits--subtitle">Career sensitization summits</p>
                </div>
                <div className="col-md-3">
                  <img src="/images/about/mission.png" alt="" className="img-fluid benefits--img" />
                  <p className="benefits--subtitle">
                    Free online masterclasses
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-4">
            <button className="benefits--btn col-md-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Join Tyrbe</button>
          </div>
        </div>
      </div>
      {/* // MODAL */}

      <div className="modal fade border-0" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog bg-white">
          <div className="modal-content p-4">
            <div className="modal-header border-0 p-4">
              <h5 className="modal-title benefits__modal--title" id="exampleModalLabel">Join Trybe by eLab</h5>
              <button type="button" className="btn-close bg-dark rounded" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p className="modal-text benefits__modal--text">
                Supply the details below to join the community
              </p>
              <form>
                <div className="mb-3">
                  <span>Full Name: </span>
                  <input type="text" id="fullname" className="form-control" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                  <span>Email:</span>
                  <input type="text" className="form-control" placeholder="Email Address" />
                </div>
                <div className="mb-2">
                  <button type="button" className="benefits--btn">Join Tyrbe Community</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Benefits;
