import React from 'react';

function Payment() {
  return (
    <div className="payment py-3">
      <div className="container">
        <div className="row">
          <div className="payment--title">Package Summary</div>
          <div className="col-md-4 mt-4">
            <div className="card border-0 payment__card p-4 shadow-sm">
              <div className="payment__card--title">Private Team Workspace</div>
              <div className="payment__card--subtitle">NGN 45,000</div>
              <div className="row text-start p-2">
                <div className="col-md-6 payment__card--items">Duration:</div>
                <div className="col-md-6">Monthly</div>
                <div className="col-md-6 payment__card--items">Date:</div>
                <div className="col-md-6">26th Oct; - 25th Nov; 2022</div>
                <div className="col-md-6 payment__card--items">Number of person:</div>
                <div className="col-md-6">2</div>
                <div className="col-md-6 payment__card--items">Internet:</div>
                <div className="col-md-6">No</div>
                <div className="col-md-6 payment__card--items">Office address usage:</div>
                <div className="col-md-6">Yes</div>
              </div>
            </div>
            <div className="mt-5">
              <button type="button" className="payment--btn">Make Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
