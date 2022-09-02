import React from 'react';

function ProfitCard() {
  return (
    <div className="profitcard py-3">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-6 col-lg-4 p-2 px-2 px-lg-4 my-3 my-lg-4 ">
            <div className="card p-4 px-lg-5 py-lg-5 pb-lg-4 pb-2 border-0 bg-light">
              <div className="profitcard--subtitle">
                Non-profit title
                {' '}
                <br />
                {' '}
                goes here
              </div>
              <img src="/images/program/non-profit1.png" alt="" className="p-3" />
              <div className="d-flex">
                <span className="profitcard--text">Learn More</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-2 px-2 px-lg-4 my-3 my-lg-4">
            <div className="card p-4 px-lg-5 py-lg-5 pb-lg-4 pb-2 bg-light border-0">
              <div className="profitcard--subtitle">
                Non-profit title
                {' '}
                <br />
                {' '}
                goes here
              </div>
              <img src="/images/program/non-profit3.png" alt="" className="p-3" />
              <div className="d-flex">
                <span className="profitcard--text">Learn More</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-2 px-2 px-lg-4 my-3 my-lg-4">
            <div className="card p-4 px-lg-5 py-lg-5 pb-lg-4 pb-2 bg-light border-0">
              <div className="profitcard--subtitle">
                Non-profit title
                {' '}
                <br />
                {' '}
                goes here
              </div>
              <img src="/images/program/non-profit2.png" alt="" className="p-3" />
              {/* <span className="border-bottom" /> */}
              <div className="d-flex">
                <span className="profitcard--text">Learn More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfitCard;
