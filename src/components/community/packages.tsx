import React from 'react';
import { Link } from 'react-router-dom';
import PACKAGE__SCHEMA from './packages.json';

interface obj {
  id: number | string,
  subtitle: string,
    text: string,
    image: string
}
function Packages() {
  const packages: obj[] = PACKAGE__SCHEMA;

  return (
    <div className="packages py-5">
      <div className="container py-lg-5">
        <div className="row">
          <div className="packages--title text-center">Available Packages</div>
          <p className="packages--text text-center">Select a package that best fits your need.</p>
          {
            packages?.map(({
              id, image, subtitle, text,
            }) => (
              <div className="col-md-6 col-lg-4 my-3 px-3" key={id}>
                <div className="card border-0 packages__card h-100">
                  <Link to={`/programs/packages-details/${id}`}>
                    <img src={image} className="card-img-top packages__card--img" alt="" />
                  </Link>
                  <div className="card-body p-4">
                    <h6 className="card-title packages__card--subtitle mb-0">
                      {subtitle}
                    </h6>
                    <p className="packages__card--text pt-0 pb-2">{text}</p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}
export default Packages;
