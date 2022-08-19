import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navi">
      <nav className="navbar navbar-expand-md fixed-top bg-white shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand link"><img src="/images/favicon/logo.png" className="navi__logo" alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-dark" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            <form className="d-flex flex-end ms-auto" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/about" className="navi--link text-dark nav-link active p-2" aria-current="page">About us</Link>
                </li>
                <li className="nav-item dropdown navi__dropdown">
                  <Link className="navi--link text-dark link nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Programs
                  </Link>
                  <ul className="dropdown-menu border-0 shadow-sm">
                    <div className="container">
                      <div className="row g-2">
                        <div className="col-md-6">
                          <li className="navi__menu--item">
                            <Link className="dropdown-item" to="/programs/community">Community</Link>
                            <p>A short description stays here</p>
                          </li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item"><Link className="dropdown-item" to="/programs/project">Projects</Link></li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item"><Link className="dropdown-item" to="/">Innovation Hub</Link></li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item"><Link className="dropdown-item" to="/programs/profits">None Profits</Link></li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item"><Link className="dropdown-item" to="/programs/startups">Startup Foundry</Link></li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown navi__dropdown">
                  <Link className="navi--link text-dark link nav-link" to="/home_services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </Link>
                  <ul className="dropdown-menu border-0 navi__menu">
                    <div className="container">
                      <div className="row g-2">
                        <div className="col-md-6">
                          <li className="navi__menu--item"><Link className="dropdown-item" to="/home_services/training">Training</Link></li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item"><Link className="dropdown-item" to="/home_services/consultation">Consultation</Link></li>
                        </div>
                        <div className="col-md-6 ">
                          <li className="navi__menu--item"><Link className="dropdown-item " to="/home_services/consultation/bookings">Bookings</Link></li>
                        </div>
                        <div className="col-md-6 ">
                          <li className="navi__menu--item"><Link className="dropdown-item " to="/home_services/training-details">Training details</Link></li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown navi__dropdown">
                  <Link className="navi--link text-dark link nav-link p-2" to="/home_services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources
                  </Link>
                  <ul className="dropdown-menu border-0 navi__menu">
                    <div className="container">
                      <div className="row g-2">
                        <div className="col-md-6">
                          <li className="navi__menu--item"><Link className="dropdown-item" to="/home_resources/blog">Blog</Link></li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item"><Link className="dropdown-item" to="/home_resources/blog-details">Blog details</Link></li>
                        </div>
                        <div className="col-md-6">
                          <li className="navi__menu--item"><Link className="dropdown-item" to="/home_resources/consultation">Ebook</Link></li>
                        </div>
                        <div className="col-md-6 ">
                          <li className="navi__menu--item"><Link className="dropdown-item " to="/">home</Link></li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item ">
                  <Link to="/home_resources/contact-us" className="navi--link text-dark link nav-link p-2">Contact Us</Link>
                </li>
                <button className="navi--btn" type="submit">
                  <li className=""><Link className="dropdown-item " to="/home_resources/Why">Find your Y</Link></li>
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
