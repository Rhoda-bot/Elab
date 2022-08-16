import React from 'react';

function Media() {
  return (
    <div className="media">
      <div className="container">
        <div className="row text-center align-items-center justify-content-center">
          <div className="media--title">Media Mentions</div>
          <p className="media--text">
            Some media houses have decided to shout about what we do from the
            <br />
            housetops and thats great because we also arent hiding our light in any way.
          </p>
          <div className="col-md-3">
            <img src="/images/thenation.png" alt="logo" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src="/images/thisdat.png" alt="logo" className="img-fluid p-4" />
          </div>
          <div className="col-md-3">
            <img src="/images/thesun.png" alt="logo" className="img-fluid p-5" />
          </div>
          <div className="col-md-3">
            <img src="/images/ladokite.png" alt="logo" className="img-fluid p-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Media;
