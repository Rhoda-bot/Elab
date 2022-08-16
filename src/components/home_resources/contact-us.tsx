/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';
import GogglePage from './goggle-page';

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="contacts py-5">
        <div className="container">
          <div className="row pt-4">
            <div className="contacts--title text-center">Get in Touch</div>
            <p className="text text-center">
              we’d love to hear from you - here’s how...
            </p>
            <div className="col-md-6">
              <form action="" className="row">
                <div className="md-3 mb-3">
                  <span>Full Name</span>
                  <input type="text" className="form-control form-control-lg" />
                </div>
                <div className="md-3 mb-3">
                  <span>Email Address</span>
                  <input type="email" className="form-control form-control-lg" />
                </div>
                <div className="md-3 mb-3">
                  <span>Message</span>
                  <textarea className="form-control form-control-lg p-5" />
                </div>
                <div className="md-3 pt-3">
                  <button type="button" className="contacts--btn">Send Message</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <p className="contacts--subtitle">
                Phone Number
              </p>
              <p>
                50, Ogbomoso-Ilorin Rd, General Area, Ogbomoso,
                <br />
                Oyo-State, Nigeria.
              </p>
              <p className="contacts--subtitle">
                Email Address
              </p>
              <p>
                hello@ennovatelab.com
              </p>
              <p className="contacts--subtitle">
                Phone Number
              </p>
              <p>
                +234 905 642 2768
              </p>
            </div>
          </div>
        </div>
      </div>
      <GogglePage />
      <Footer />
    </>
  );
}
export default ContactUs;
