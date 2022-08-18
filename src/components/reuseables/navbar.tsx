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
                  <Link to="/about" className="navi--link text-dark nav-link active" aria-current="page">About us</Link>
                </li>
                <li className="nav-item dropdown w-lg-100">
                  <Link className="navi--link text-dark link nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Programs
                  </Link>
                  <ul className="dropdown-menu border-0 shadow-sm">
                    <div className="container">
                      <div className="row g-2">
                        <div className="col-md-6 p-2">
                          <li><Link className="dropdown-item" to="/">Action</Link></li>
                        </div>
                        <div className="col-md-6 p-2">
                          <li><Link className="dropdown-item" to="/">Another action</Link></li>
                        </div>
                        <div className="col-md-6 p-2 ">
                          <li><Link className="dropdown-item  border-start border-warning border-end-0 border-top-0 border-bottom-0" to="/">Something else here</Link></li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item dropdown w-lg-100">
                  <Link className="navi--link text-dark link nav-link" to="/home_services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </Link>
                  <ul className="dropdown-menu border-0 shadow-sm">
                    <div className="container">
                      <div className="row g-2">
                        <div className="col-md-6 p-2">
                          <li><Link className="dropdown-item" to="/">Action</Link></li>
                        </div>
                        <div className="col-md-6 p-2">
                          <li><Link className="dropdown-item" to="/">Another action</Link></li>
                        </div>
                        <div className="col-md-6 p-2 ">
                          <li><Link className="dropdown-item  border-start border-warning border-end-0 border-top-0 border-bottom-0" to="/">Something else here</Link></li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/resources" className="navi--link text-dark link nav-link">Resources</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="navi--link text-dark link nav-link">Contact Us</Link>
                </li>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
