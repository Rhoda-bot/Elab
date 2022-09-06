import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer py-5">
      <div className="container py-lg-5">
        <div className="row footer__top pb-lg-2">
          <div className="col-md-6 col-lg-3 my-2 my-lg-0 ">
            <h5 className="fw-bold pb-2 footer__top--title">Quick Links</h5>
            <li className="p-2">
              <Link to="/" className="footer__top--text link">Founders Community</Link>
            </li>
            <li className="p-2">
              <Link to="/" className="footer__top--text link">Trybe by eLab</Link>
            </li>
            <li className="p-2">
              <Link to="/" className="footer__top--text link">Find your Y</Link>
            </li>
          </div>
          <div className="col-md-6 col-lg-3 my-2 my-lg-0">
            <h5 className="fw-bold pb-2 footer__top--title">Resources</h5>
            <li className="p-2">
              <Link to="/" className="footer__top--text link">ebook</Link>
            </li>
            <li className="p-2">
              <Link to="/" className="footer__top--text link">Whitepaper</Link>
            </li>
            <li className="p-2">
              <Link to="/" className="footer__top--text link">Blog</Link>
            </li>
            <li className="p-2">
              <Link to="/" className="footer__top--text link">Faq</Link>
            </li>

          </div>
          <div className="col-md-6 col-lg-3 my-2 my-lg-0">
            <h5 className="fw-bold pb-2 footer__top--title">Company</h5>
            <li>
              <Link to="/" className="footer__top--text link">About Us</Link>
            </li>
          </div>
          <div className="col-md-6 col-lg-3 my-2 my-lg-0">
            <h5 className="fw-bold pb-2 footer__top--title">Contact Us</h5>
            <p className="footer__top--text">50, Ogbomoso- iLorin Rd, General Area Ogbomoso.</p>
            <p className="footer__top--text">hello@ennovatelab.com</p>
            <p className="footer__top--text">+234 905 642 2768</p>
          </div>
        </div>
        <div className="row pt-lg-3 footer__bootom align-items-center justify-content-center text-center text-md-start">
          <hr className="footer--line" />
          <div className="col-md-6 col-lg-4 my-2 my-lg-0 text-lg-start">
            <li>
              <img src="/images/favicon/logo-white.png" alt="" className="img-fluid footer__bottom--icon" />
            </li>

          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-0">
            <li>
              <Link to="/" className="footer__top--text link px-2">Policy</Link>
              <Link to="/" className="footer__top--text link px-2">Terms & Conditions</Link>
            </li>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-0">
            <div className="custom-b text-lg-end w-100">
              <div className="footer__buttons--circle my-md-2 w-100 ">
                <ul className="p-0 w-100 ml-0 text-lg-end">
                  <Link className="" target="_blank" rel="noreferer" to="https://web.facebook.com/Ennovatelab">
                    <span className="fa-stack fa-1x custom ms-3">
                      <i className="fas fa-circle fa-stack-2x" aria-hidden="true" />
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse footer--socials" aria-hidden="true" />
                    </span>
                  </Link>
                  <Link className="" target="_blank" rel="noreferer" to="https://www.instagram.com/official_ennovatelab/">
                    <span className="fa-stack fa-1x custom ms-3" role="button">
                      <i className="fas fa-circle fa-stack-2x" aria-hidden="true" />
                      <i className="fab fa-instagram fa-stack-1x fa-inverse footer--socials" aria-hidden="true" />
                    </span>
                  </Link>
                  <Link className="" target="_blank" rel="noreferer" to="https://www.linkedin.com/in/ennovatelabteam/">
                    <span className="fa-stack fa-1x custom ms-3" role="button">
                      <i className="fas fa-circle fa-stack-2x" aria-hidden="true" />
                      <i className="fab fa-linkedin-in fa-stack-1x fa-inverse footer--socials" aria-hidden="true" />
                    </span>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
