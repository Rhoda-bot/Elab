/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import STARTUP__SCHEMA from './startup.json';

// OBJ represents each object from the Startup.json file //
interface obj {
  id: number,
  name: string,
  description: string,
  about: string,
  aboutText: string,
  goal: string,
  goalText: string,
  investment: string,
  investmentText: string,
  image: string
}
function Startups() {
  const startup: obj[] = STARTUP__SCHEMA;

  return (
    <div className="startup py-4">
      <div className="container">
        <div className="row">
          <div className="startup--title text-center">
            Our Startup
            {' '}
            <br />
            <span className="circleBg ps-4 pb-4 pe-4">Directory</span>
          </div>
          <p className="startup--text text-center">Startups in our foundry</p>
        </div>
        {
            startup?.map(({
              id, name, description, image,
            }) => (
              <div className="row mx-auto justify-content-center">
                <div className="col-md-9 text-start p-3">
                  <Link to={`/programs/startups/details/${name}`} key={id} className="link">
                    <div className="card border-0 startup__card p-4 shadow-sm">
                      <div className="row g-0">
                        <div className="col-md-4 ">
                          <img src={image} alt="" className="startup__card--img" />
                        </div>
                        <div className="col-md-8">
                          <div className="startup__card--subtitle">{name}</div>
                          <p className="startup__card--text">
                            {description}
                          </p>

                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
}
export default Startups;
