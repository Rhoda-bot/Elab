import React from 'react';

function Events() {
  return (
    <div className="events">
      <div className="container">
        <div className="rowevents__description-btn">
          <div className="events--title text-center">Events Just For You</div>
          <p className="events--text text-center">
            We are consistently curating the best events that help our community
            <br />
            acheive their dreams.
          </p>
          <div className="row p-5">
            <div className="col-md-4 events___description p-4">
              <img src="/images/matt.jpg" alt="IMAGEs" className="card-img-top" />
              <div className="card-body text-start shadow-sm">
                <button type="button" className="events___description--btn">Firesite </button>
                <p className="events___description--text">
                  Header text for program title and
                  it can be this long
                </p>
                <p className="text-center">Appropriate CTA</p>
              </div>
            </div>
            <div className="col-md-4 events___description p-4">
              <img src="/images/rec.jpg" alt="IMAGEs" className="card-img-top" />
              <div className="card-body text-start shadow-sm">
                <button type="button" className="events___description--btn">Open house </button>
                <p className="events___description--text">
                  Header text for program title and
                  it can be this long
                </p>
                <p className="text-center">Appropriate CTA</p>
              </div>
            </div>
            <div className="col-md-4 events___description p-4">
              <img src="/images/around.jpg" alt="IMAGEs" className="card-img-top" />
              <div className="card-body text-start shadow-sm">
                <button type="button" className="events___description--btn">Meetup </button>
                <p className="events___description--text">
                  Header text for program title and
                  it can be this long
                </p>
                <p className="text-center">Appropriate CTA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;
