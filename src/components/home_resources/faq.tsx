/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';

function Faq() {
  return (
    <>
      <Navbar />
      <div className="faq py-5">
        <div className="container">
          <div className="row justify-content-center text-center pt-4">
            <div className="faq--title">
              Frequently Asked
              <br />
              Questions Answered
            </div>
            <p className="faq--text">You have questions? We have answers.</p>
            <div className="col-md-10">
              <div className="accordion p-3 border-0" id="accordionPanelsStayOpenExample ">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body p-3 border-0">
                      <strong>This is the first item accordion body.</strong>
                      {' '}
                      It is shown by default, until the collapse plugin adds the appropriate
                      classes that we use to style each element. These classes control the overall
                      appearance, as well as the showing and hiding via CSS transitions.
                      You can modify any of this with custom CSS or overriding our default
                      variables. Is also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>
                      , though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                      {' '}
                      It is hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any of
                      this with custom CSS or overriding our default variables.
                      Its also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>
                      , though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                      {' '}
                      It is hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables.
                      Its also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>
                      , though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Faq;
