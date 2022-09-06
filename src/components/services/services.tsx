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
    <div className="provider py-5">
      <div className="container py-lg-5">
        <div className="provider__top text-center mx-auto">
          <h4 className="provider--title ">Services Provided</h4>
          <p className="provider--text pt-3">
            We are ready to serve you. Take a deep dive now
          </p>
          <div className="row py-5">
            {
                services?.map(({
                  id, title, text, image,
                }) => (
                  <div className="col-md-6 col-lg-4 my-3 px-3 px-lg-4 text-start p-3" key={id}>
                    <div className="card border-0 h-100 pb-2 service__card">
                      <img src={image} alt="" className=" card-img-top service__card--img h-100" />
                      <div className="card-body p-4">
                        <h6 className="service__card--subtitle">{title}</h6>
                        <p className="service__card--text pt-1">
                          {text}
                        </p>
                        <div className="py-2 pt-3 pt-lg-3">
                          <span className="px-3 py-2 fw-bold service__card--span">Visit Website</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServiceProvider;
