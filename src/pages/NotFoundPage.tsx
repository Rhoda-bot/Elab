import React from 'react';

function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="container">
        <div className="row py-5 text-center justify-content-center align-items-center text-center">
          <div className="col-md-12">
            <div className="notfound__content">
              <img src="/images/reusable/error.png" alt="" className="img-fluid" />
              <p className="notfound__content--text">
                You did not break the internet, but we cannot find what you are looking for.
              </p>
              <button className="notfound__content--btn " type="button">Go back Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
