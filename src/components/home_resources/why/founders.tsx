import React from 'react';
import { Link } from 'react-router-dom';
import WHY__SCHEMA from './why.json';

interface obj {
    id: number,
    image: string,
    text: string,
    title: string
}

function Founders() {
  const why: obj[] = WHY__SCHEMA;
  return (
    <div className="founders">
      <div className="container pt-3">
        <div className="row align-items-center py-5">
          {
                why?.map(({
                  id, image, title, text,
                }) => (
                  <div
                    className="col-md-4 founders__description p-2"
                    key={id}
                  >
                    <div
                      className="card border-0 founders__card"
                    >
                      <img src={image} alt="" className="card-img founders__card--img" />
                      <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                        <div className="founders__description--title">
                          <Link to={`/home_resources/Why/${id}`} className="link text-white">
                            {title}
                          </Link>
                        </div>
                        <p className="founders__description--text">
                          {text}
                        </p>
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
export default Founders;
