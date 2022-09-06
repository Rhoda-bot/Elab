import React from 'react';

function Benefits() {
  return (
    <>
      <div className="benefit py-5">
        <div className="container py-lg-5">
          <div className="benefit__header text-center mx-auto">
            <h4 className="benefit__header--title py-3">Benefits of Joining the Community</h4>
            <p className="benefit__header--text">
              As a Trybe member, your benefits are:
            </p>
          </div>
          <div className="benefit__bottom  mx-auto justify-content-center">
            <div className="row text-center my-2 my-lg-4">
              <div className="col-md-6 col-lg-4 h-100 my-lg-3">
                <div className="benefit__card border-0 h-100">
                  <img src="/images/favicon/benefit1.png" alt="" className="img-fluid  my-2 my-lg-3 benefit__card--img" />
                  <div className="card-body px-3 px-md-5">
                    <h6 className=" card-title benefit__card--subtitle">
                      Free online masterclasses
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 h-100 my-lg-3">
                <div className="benefit__card border-0 h-100">
                  <img src="/images/favicon/benefit2.png" alt="" className="img-fluid  my-2 my-lg-3 benefit__card--img" />
                  <div className="card-body px-3 px-md-5">
                    <h6 className="benefit__card--subtitle card-title">Career sensitization summits</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 h-100 my-lg-3">
                <div className="benefit__card border-0 h-100">
                  <img src="/images/favicon/benefit2.png" alt="" className="img-fluid  my-2 my-lg-3 benefit__card--img" />
                  <div className="card-body px-3 px-md-5">
                    <h6 className="benefit__card--subtitle card-title">Free Online Class</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefit__cta py-4 text-center">
          <button className="benefit__cta--btn fw-bold py-3 px-5" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Join Tyrbe</button>
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
