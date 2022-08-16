/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className="testimonial p-4 py-5 text-center">
      <h2 className="testimonial--title">Don’t take our words for it</h2>
      <Slider {...settings}>
        <div className="col-md-3 mb-3 p-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-3">
              <p className="card-content p-3">
                Nisl amet, tincidunt lacus, egestas sed.
                Sed donec viverra odio massa sed
                a, id fames. Sollicitudin ac condimentum pellentesque duis feugiat.
                Pellentesque.
              </p>
              <div className="testimonial--subtitle text-start">Name of Tryber</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3 p-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-3">
              <p className="card-content p-3">
                Nisl amet, tincidunt lacus, egestas sed.
                Sed donec viverra odio massa sed
                a, id fames. Sollicitudin ac condimentum pellentesque duis feugiat.
                Pellentesque.
              </p>
              <div className="testimonial--subtitle text-start">Name of Tryber</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3 p-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-3">
              <p className="card-content p-3">
                Nisl amet, tincidunt lacus, egestas sed.
                Sed donec viverra odio massa sed
                a, id fames. Sollicitudin ac condimentum pellentesque duis feugiat.
                Pellentesque.
              </p>
              <div className="testimonial--subtitle text-start">Name of Tryber</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3 p-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-3">
              <p className="card-content p-3">
                Nisl amet, tincidunt lacus, egestas sed.
                Sed donec viverra odio massa sed
                a, id fames. Sollicitudin ac condimentum pellentesque duis feugiat.
                Pellentesque.
              </p>
              <div className="testimonial--subtitle text-start">Name of Tryber</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3 p-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-3">
              <p className="card-content p-3">
                Nisl amet, tincidunt lacus, egestas sed.
                Sed donec viverra odio massa sed
                a, id fames. Sollicitudin ac condimentum pellentesque duis feugiat.
                Pellentesque.
              </p>
              <div className="testimonial--subtitle text-start">Name of Tryber</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3 p-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-3">
              <p className="card-content p-3">
                Nisl amet, tincidunt lacus, egestas sed.
                Sed donec viverra odio massa sed
                a, id fames. Sollicitudin ac condimentum pellentesque duis feugiat.
                Pellentesque.
              </p>
              <div className="testimonial--subtitle text-start">Name of Tryber</div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
