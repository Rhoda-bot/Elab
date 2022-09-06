import React from 'react';

function Values() {
  return (
    <div className="values py-5">
      <div className="container py-lg-5">
        <div className="row values__top text-center align-items-center mx-auto justify-content-center">
          <h5 className="values__top--title py-3">Our Guiding Values</h5>
          <p className="values__top--text">
            Ennovate Lab is an ark built on the foundation of
            redemptive entreprenuership to preserve posterity
            in the marketplace as well as template kingdom
            enterprise for the age to come.
          </p>
        </div>
        <div className="row text-center py-2">
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="values__card h-100">
              <img src="/images/about/community.png" alt="" className="img-fluid values__card--img my-2 mx-auto" />
              <div className="card-body px-3 px-md-5">
                <h5 className="values__card--subtitle fw-bold">Community-driven</h5>
                <p className="values__card--text">
                  We desire to see underserved university
                  communities thrive.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="values__card h-100">
              <img src="/images/about/cama.png" alt="" className="img-fluid values__card--img my-2 mx-auto" />
              <h5 className="values__card--subtitle fw-bold">Creativity</h5>
              <p className="values__card--text">
                Creativity is a unique part of our culture
                which drives everything we do.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="values__card h-100">
              <img src="/images/about/teamwork.png" alt="" className="img-fluid values__card--img" />
              <h5 className="values__card--subtitle fw-bold">Teamwork</h5>
              <p className="values__card--text">
                At Ennovate Lab, every one person is as important
                as the other person
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="values__card h-100">
              <img src="/images/about/integrity.png" alt="" className="img-fluid values__card--img" />
              <h5 className="values__card--subtitle fw-bold">Integrity</h5>
              <p className="values__card--text">
                Integrity is the force that Knits us all
                together from the 4 founders to the newest intern.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="values__card h-100">
              <img src="/images/about/empathy.png" alt="" className="img-fluid values__card--img" />
              <h5 className="values__card--subtitle">Empathy</h5>
              <p className="values__card--text">
                Empathy is non-negotiable. It is what allows
                us to understand non-consumption and build for
                market-creating innovations.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="values__card h-100">
              <img src="/images/about/cama.png" alt="" className="img-fluid values__card--img" />
              <h5 className="values__card--subtitle">Comaraderie</h5>
              <p className="values__card--text">
                We hold dearly the prevading atmosphere of
                familyhood and friendship both in the workplace
                and in our relationship with other stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Values;
