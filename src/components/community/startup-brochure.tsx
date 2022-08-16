import React from 'react';

function Brochure() {
  return (
    <div className="brochure py-4">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="brochure--title">Download Brochure</div>
          <p className="brochure--text">
            Become a part of an exclusive community for
            {' '}
            <br />
            entrepreneurs and tech-enthusiasts.
          </p>
          <div className="col-md-8 text-start">
            <form action="" className="row">
              <div className="md-3 mb-3">
                <span>Full Name:</span>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="md-3 mb-2">
                <span>Email Address:</span>
                <input type="text" className="form-control form-control-lg" placeholder="" />
              </div>
              <div className="md-3 mb-2">
                <span>Message</span>
                <textarea className="form-control form-control-lg" />
              </div>
              <div className="md-3 mt-4 pt-3">
                <button type="button" className="brochure--btn">Download Brochure</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brochure;
