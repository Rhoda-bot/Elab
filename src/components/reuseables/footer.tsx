import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer__description">
            <ul>
              <li className="footer__description--title">Quick Links</li>
              <li className="footer__description--text">Founders Community</li>
              <li className="footer__description--text">Trybe by eLab</li>
              <li className="footer__description--text">Find your Y</li>
            </ul>
          </div>
          <div className="col-md-3 footer__description">
            <ul>
              <li className="footer__description--title">Resources</li>
              <li className="footer__description--text">ebook</li>
              <li className="footer__description--text">Whitepaper</li>
              <li className="footer__description--text">Blog</li>
              <li className="footer__description--text">Faq</li>
            </ul>
          </div>
          <div className="col-md-3 footer__description">
            <ul>
              <li className="footer__description--title">Company</li>
              <li className="footer__description--text">About Us</li>
            </ul>
          </div>
          <div className="col-md-3 footer__description">
            <ul>
              <li className="footer__description--title">Contact Us</li>
              <li className="footer__description--text">50, Ogbomoso- iLorin Rd, General Area Ogbomoso.</li>
              <li className="footer__description--text">hello@ennovatelab.com</li>
              <li className="footer__description--text">+234 905 642 2768</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="border-top p-4 " />
          <div className="col-md-4">
            <img src="/images/favicon.ico" alt="" className="img-fluid" />
            <span>
              <b>
                Ennovate
                <i>Lab</i>
              </b>
            </span>
          </div>
          <div className="col-md-4">
            Privacy Policy  Terms&Conditions
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
