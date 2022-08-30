import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
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
                <b>
                  {' '}
                  <i className="fa-solid fa-circle-notch mt-1 m-3" />
                </b>
                <span>Log out</span>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavigationBar;
