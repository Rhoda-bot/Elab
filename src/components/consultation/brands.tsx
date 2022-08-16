import React from 'react';

function Brands() {
  return (
    <div className="brands py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="brands--title">Brands we have consulted for</div>
          <p className="brands--text">
            Urna volutpat, ullamcorper egestas et. Amet risus ut.
            Urna volutpat,
            <br />
            ullamcorper egestas et. Amet risus ut.
          </p>
          <div className="col-md-2">
            <div className="card  border-0 p-3">
              <img src="/images/field.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="card  border-0 p-3">
              <img src="/images/hultprize.png" alt="" className="img-fluid p-3" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="card border-0 p-3">
              <img src="/images/eridan.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="card  border-0 p-3">
              <img src="/images/aihub.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="card  border-0 p-3">
              <img src="/images/threefold.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brands;
