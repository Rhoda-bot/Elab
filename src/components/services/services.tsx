import React from 'react';
import SERVICES__SCHEMA from './services.json';

interface obj {
    id: number,
    title: string,
    text: string,
    image: string
}

function ServiceProvider() {
  const services: obj[] = SERVICES__SCHEMA;
  return (
    <div className="serviceprovider py-4">
      <div className="container">
        <div className="row text-center">
          <div className="serviceprovider--title ">Services Provided</div>
          <p className="serviceprovider--text ">
            We are ready to serve you. Take a deep dive now
          </p>
          {
                services?.map(({
                  id, title, text, image,
                }) => (
                  <div className="col-md-6 col-lg-4 text-start p-3" key={id}>
                    <div className="card border-0 shadow-sm serviceprovider__description">
                      <img src={image} alt="" className=" card-img-top serviceprovider__description--img" />
                      <div className="card-body p-4">
                        <div className="serviceprovider__description--subtitle">{title}</div>
                        <p className="serviceprovider__description--text">
                          {text}
                        </p>
                        <div className="d-flex">
                          <span className="serviceprovider__description--dash" />
                          <span className="serviceprovider__description--span">Visit Website</span>
                        </div>
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
export default ServiceProvider;
