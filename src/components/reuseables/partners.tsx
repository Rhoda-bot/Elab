/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

function Partners() {
  return (
    <div className="partners">
      <div className="container">
        <div className="mx-auto text-center ">
          <span className="partners--logo ps-4 pb-5 pe-4 text-center p-3 ">Our Partners</span>
          <p className="pt-4">
            We are always looking for other organizations who are doing good
            <br />
            in the world and are proud to be associated with them.
          </p>
        </div>
        <div className="row align-items-center justify-content-center text-center m-4">
          <div className="col-md-2">
            <img src="/images/field.png" alt="logo" className="img-fluid" />
          </div>
          <div className="col-md-2 p-5">
            <img src="/images/hultprize.png" alt="logo" className="img-fluid" />
          </div>
          <div className="col-md-2">
            <img src="/images/eridan.png" alt="logo" className="img-fluid" />
          </div>
          <div className="col-md-2">
            <img src="/images/aihub.png" alt="logo" className="img-fluid" />
          </div>
          <div className="col-md-2">
            <img src="/images/threefold.png" alt="logo" className="img-fluid" />
          </div>
        </div>
        <div className="row partners__description text-start mx-auto">
          <div className="partners__description--title">eLab Musing</div>
          <div className="col-md-6">
            <p className="partners__description--text pb-3">
              Lets share with you some information about the Lab as noteworthy
              <br />
              business insights from lived-experiences as an organization.
            </p>
            <form>
              <div className="row g-3 ">
                <div className="col-md-3">
                  <input type="text" className="form-control p-2" placeholder="your name" />
                </div>
                <div className="col-md-5">
                  <input type="text" className="form-control p-2" placeholder="your email address" />
                </div>
                <div className="col-md-3 ml-3">
                  <button type="button" className="partners__description--btn">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Partners;
