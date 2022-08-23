import React from 'react';

function Events() {
  return (
    <div className="events">
      <div className="container">
        <div className="row">
          <div className="events--title text-center">Events Just For You</div>
          <p className="events--text text-center">
            We are consistently curating the best events that help our community
            <br />
            acheive their dreams.
          </p>
          <div className="row p-5">
            <div className="col-md-4 events__description p-4">
              <div className="card border-0 events__card">
                <img src="/images/matt.jpg" alt="IMAGEs" className="card-img-top" />
                <div className="card-body text-start">
                  <button type="button" className="events__card--btn">Firesite </button>
                  <p className="events__card--subtitle">
                    Header text for program title and
                    it can be this long
                  </p>
                  <p className="text-center events__card--text">Appropriate CTA</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 events__description p-4">
              <div className="card events__card border-0">
                <img src="/images/rec.jpg" alt="IMAGEs" className="card-img-top" />
                <div className="card-body text-start">
                  <button type="button" className="events__card--btn">Open house </button>
                  <p className="events__card--subtitle">
                    Header text for program title and
                    it can be this long
                  </p>
                  <p className="text-center events__card--text">Appropriate CTA</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 events__description p-4">
              <div className="card events__card border-0">
                <img src="/images/around.jpg" alt="IMAGEs" className="card-img-top" />
                <div className="card-body text-start">
                  <button type="button" className="events__card--btn">Meetup </button>
                  <p className="events__card--subtitle">
                    Header text for program title and
                    it can be this long
                  </p>
                  <p className="text-center events__card--text">Appropriate CTA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Events;
