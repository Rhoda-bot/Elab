/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';
import BlogDetails from './blog-details';
import RESOURCE__SCHEMA from './resources.json';

interface obj {
  id: number,
  title: string,
  image: string
}

function Blog() {
  const resources: obj[] = RESOURCE__SCHEMA;
  return (
    <>
      <Navbar />
      <BlogDetails />
      <div className="container">
        <div className="row py-5">
          <div className="blogdetails--title ">Related Blog Post</div>
          {
          resources.slice(0, 4).map(({ id, title, image }) => (
            <div className="col-md-4 col-lg-3 g-4" key={id}>
              <div className="card border-0 mt-0 p-3 p-md-4 resources__card">
                <div className="resources__description--subtitle">{title}</div>
                <img src={image} alt="" className="img-fluid px-3" />
                <div className="d-flex">
                  <span className="">Timi Arowosola </span>
                  <span className="">25th May, 2022 </span>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
      {}
      <Footer />
    </>
  );
}
export default Blog;
