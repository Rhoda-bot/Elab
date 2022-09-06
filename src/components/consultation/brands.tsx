import React from 'react';

function Brands() {
  return (
    <div className="brands py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center justify-content-center text-center">
          <div className="brands--title">Brands we have consulted for</div>
          <p className="brands--text">
            Urna volutpat, ullamcorper egestas et. Amet risus ut.
            Urna volutpat,
            <br />
            ullamcorper egestas et. Amet risus ut.
          </p>
          <div className="col-6 col-md-4 col-lg-2 p-4">
            <img src="/images/favicon/field.png" alt="" className="img-fluid w-75 brands--img" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4">
            <img src="/images/favicon/hult.png" alt="" className="img-fluid w-75 brands--img" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4">
            <img src="/images/favicon/eridan.png" alt="" className="img-fluid w-75 brands--img" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4">
            <img src="/images/favicon/global.png" alt="" className="img-fluid w-75 brands--img" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4">
            <img src="/images/favicon/threefold.png" alt="" className="img-fluid w-75 brands--img" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brands;
