import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navi">
      <nav className="navbar navbar-expand-md fixed-top bg-white shadow-sm py-0 pb-3 pt-2 pt-lg-0 pb-lg-0 py-xl-0">
        <div className="container">
          <Link to="/" className="navbar-brand link"><img src="/images/favicon/logo.png" className="navi__logo" alt="" /></Link>
          <button className="navbar-toggler shadow-none border-0 custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-dark" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            <form className="d-flex flex-end ms-auto p-2" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-lg-center">
                <li className="nav-item py-0 mx-3 mx-lg-2 mx-xl-3">
                  <Link to="/about" className="navi--link text-dark nav-link active p-2" aria-current="page">About us</Link>
                </li>
                <li className="nav-item dropdown navi__dropdown py-0 mx-3 mx-lg-2 mx-xl-3">
                  <Link className="navi--link text-dark link nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* py-1 my-1 my-lg-0 */}
                    Programs
                  </Link>
                  <ul className="dropdown-menu border-0 shadow-sm mt-1">
                    <div className="container p-4">
                      <div className="row">
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link px-3 p-2 my-3 w-100" to="/programs">
                              <span className="navi__menu--name">Community</span>
                              <br />
                              <span className="navi__menu--text">A  short description stays here</span>
                            </Link>
                          </li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link" to="/programs/project">
                              <span className="navi__menu--name">Projects</span>
                              <br />
                              <span className="navi__menu--text">A  short description stays here</span>
                            </Link>
                          </li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link" to="/">
                              <span className="navi__menu--name">Innovation Hub</span>
                              <br />
                              <span className="navi__menu--text">A  short description stays here</span>
                            </Link>

                          </li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link" to="/programs/profits">
                              <span className="navi__menu--name">None Profits</span>
                              <br />
                              <span className="navi__menu--text">A  short description stays here</span>
                            </Link>

                          </li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link" to="/programs/startups">
                              <span className="navi__menu--name">Startup Foundry</span>
                              <br />
                              <span className="navi__menu--text">A  short description stays here</span>
                            </Link>

                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown navi__dropdown py-0 mx-3 mx-lg-2 mx-xl-3">
                  <Link className="navi--link text-dark link nav-link" to="/home_services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </Link>
                  <ul className="dropdown-menu border-0 navi__menu mt-1">
                    <div className="container p-4">
                      <div className="row g-2">
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link" to="/home_services/consultation">
                              <span className="navi__menu--name">Digital Services</span>
                              <br />
                              <span className="navi__menu--text">A  short description stays here</span>
                            </Link>

                          </li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link" to="/home_services/consultation">
                              <span className="navi__menu--name">Consulting</span>
                              <br />
                              <span className="navi__menu--text">A  short description stays here</span>
                            </Link>
                          </li>
                        </div>
                        <div className="col-md-6 ">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link " to="/home_services/training">
                              <span className="navi__menu--name">Training</span>
                              <br />
                              <span className="navi__menu--text">A  short description stays here</span>
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown navi__dropdown py-0 mx-3 mx-lg-2 mx-xl-3">
                  <Link className="navi--link text-dark link nav-link p-2" to="/home_services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources
                  </Link>
                  <ul className="dropdown-menu border-0 navi__menu mt-1">
                    <div className="container p-4">
                      <div className="row g-2">
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link" to="/home_resources/blog">
                              <span className="navi__menu--name">Blog</span>
                              <br />
                              <span className="navi__menu--text">A short description stays here</span>
                            </Link>
                          </li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link" to="/home_resources/blog-details">
                              <span className="navi__menu--name">Blog details</span>
                              <br />
                              <span className="navi__menu--text">A short description stays here</span>
                            </Link>
                          </li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link" to="/home_resources/consultation">
                              <span className="navi__menu--name"> Ebook</span>
                              <br />
                              <span className="navi__menu--text">A short description stays here</span>
                            </Link>
                          </li>
                        </div>
                        <div className="col-md-6 ">
                          <li className="navi__menu--item">
                            <Link className="navi__menu--link " to="/">
                              <span className="navi__menu--name">home</span>
                              <br />
                              <span className="navi__menu--text">A short description stays here</span>
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item py-0 mx-3 mx-lg-2 mx-xl-3">
                  <Link to="/home_resources/contact-us" className="navi--link text-dark link nav-link p-2">Contact Us</Link>
                </li>
                <button className="navi--btn" type="submit">
                  <li className=""><Link className="dropdown-item " to="/home_resources/Why">login</Link></li>
                </button>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
