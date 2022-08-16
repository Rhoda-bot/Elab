import React from 'react';

function Consults() {
  return (
    <>
      <div className="consult py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 consult__description pt-5">
              <div className="consult__description--title">
                Header text about consultation stays her
              </div>
              <p className="consult__description--text">
                We integrate consulting and advisory services with solution-rich
                insights and strategically aligned,
                contextually responsive practices customized for your business needs.
              </p>
              <button type="button" className="consult__description--btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book a Session</button>
            </div>
            <div className="col-md-6 ">
              <img src="/images/services/services5.png" alt="" className="img-fluid p-5" />
            </div>
          </div>
        </div>
      </div>
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
export default Consults;
