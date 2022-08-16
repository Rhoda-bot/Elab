import React from 'react';

function ProfitCard() {
  return (
    <div className="profitcard py-3">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-6 col-lg-4 p-2">
            <div className="card p-2 shadow-sm border-0">
              <div className="subtitle">Non-profit title goes here</div>
              <img src="/images/program/non-profit1.png" alt="" className="p-3" />
              <span className="border-bottom" />
              <span className="">Learn More</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-2">
            <div className="card p-2 shadow-sm border-0">
              <div className="subtitle">Non-profit title goes here</div>
              <img src="/images/program/non-profit3.png" alt="" className="p-3" />
              <span className="border-bottom" />
              <span className="">Learn More</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-2">
            <div className="card p-2 shadow-sm border-0">
              <div className="subtitle">Non-profit title goes here</div>
              <img src="/images/program/non-profit2.png" alt="" className="p-3" />
              <span className="border-bottom" />
              <span className="">Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfitCard;
