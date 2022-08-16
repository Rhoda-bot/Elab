/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import CircleBg from '../reuseables/circleBg';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';

function Booking() {
  return (
    <>
      <Navbar />
      <div className="booking py-5">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="booking--title">
              Book a
              <CircleBg text="Session" />
            </div>
            <p className="booking--text">
              Building a clear path to help our clients deliver
              <br />
              organizational success.
            </p>
            <div className="col-md-8 text-start">
              <form action="" className="row">
                <div className="md-3 mb-2">
                  <span className="">Full Name</span>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="md-3 mb-2">
                  <span className="">Email address</span>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="col-md-6 md-3 mb-2">
                  <span className="mt-2">Phone number</span>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="col-md-6 md-3">
                  <span className="mt-2">Company</span>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="col-md-6 md-3 mb-2">
                  <span className="mt-2">Available date</span>
                  <input type="date" className="form-control mt-2" />
                </div>
                <div className="col-md-6 md-3">
                  <span className="mt-2">Available time</span>
                  <input type="time" className="form-control mt-2" />
                </div>
                <div className="col-md-6 md-3 mb-2">
                  <span className="mt-2">Location</span>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="col-md-6 md-3">
                  <span className="mt-2">Type of consultation</span>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="md-3">
                  <span>Consultation needs</span>
                  <textarea className="form-control form-control-lg" />
                </div>
                <div className="md-3 pt-5">
                  <button type="button">Schedule a Call</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Booking;
