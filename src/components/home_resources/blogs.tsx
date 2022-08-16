import React from 'react';
import RESOURCES__SCHEMA from './resources.json';

interface obj {
    id: number,
    title: string,
    image: string
}

function HomeBlog() {
  const resources: obj[] = RESOURCES__SCHEMA;
  return (
    <div className="resources mt-5 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card border-0 p-2 resources__card">
              <div className="row">
                <div className="col-md-6 resources__description">
                  <img src="/images/Resources/blog-header.png" className="img-fluid p-3" alt="" />
                </div>
                <div className="col-md-6 pt-4 resources__description">
                  <button type="button" className="resources__description--btn">Community Design</button>
                  <div className="resources__description--title mt-3">
                    Blog Title stays here and it can take the entire length if need be.
                  </div>
                  <div className="d-flex mt-4 resources__description--span">
                    <span className="p-3">‘Dayo Salako</span>
                    <span className="p-3">25th May, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
                resources?.map(({ id, title, image }) => (
                  <div className="col-md-6 col-lg-4 g-4" key={id}>
                    <div className="card border-0 mt-0 p-3 p-md-4 resources__card">
                      <div className="resources__description--subtitle">{title}</div>
                      <img src={image} alt="" className="img-fluid px-3" />
                      <div className="d-flex">
                        <span className="p-3">Timi Arowosola </span>
                        <span className="p-3">25th May, 2022 </span>
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
export default HomeBlog;
