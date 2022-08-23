import React from 'react';

function Measures() {
  return (
    <div className="measures py-5 pb-5 ">
      <div className="container">
        <div className="row text-start py-5 pb-5">
          <div className="measures--title">How we measure Impact</div>
          <p className="measures--text pt-3">
            We have heard a hard time measuring some kinds of impact we have made.
            For instance, how
            {' '}
            <br />
            does one measure hope, love, laughter, fulfillment our
            presence in our community
            {' '}
            <br />
            has brought?
            While those are difficult to measure,
            there are some much easier to
          </p>
        </div>
        <div className="row pb-5">
          <div className="col-md-6">
            <div className="measures__description--subtitle">195+</div>
            <div className="measures__description--text mb-5">Team Members</div>
          </div>
          <div className="col-md-6">
            <div className="measures__description--subtitle">4+</div>
            <div className="measures__description--text mb-5">Business</div>
          </div>
          <div className="col-md-6">
            <div className="measures__description--subtitle">50+</div>
            <div className="measures__description--text">Enterprenuers</div>
          </div>
          <div className="col-md-6">
            <div className="measures__description--subtitle">750+</div>
            <div className="measures__description--text">Secondary School Students</div>
          </div>
        </div>
      </div>

      <div />
    </div>
  );
}
export default Measures;
