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
    <div className="packages">
      <div className="container">
        <div className="row">
          <div className="packages--title text-center">Available Packages</div>
          <p className="packages--text text-center">Select a package that best fits your need.</p>
          {
            packages?.map(({
              id, image, subtitle, text,
            }) => (
              <div className="col-md-4 p-2" key={id}>
                <div className="card border-0 packages__card p-2">
                  <Link to={`/programs/packages-details/${id}`}>
                    <img src={image} className="card-img-top packages__card--img" alt="" />
                  </Link>
                  <div className="card-body text-start shadow-sm rounded">
                    <div className="packages__card--subtitle">
                      {subtitle}
                    </div>
                    <p className="packages__card--text">{text}</p>
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
