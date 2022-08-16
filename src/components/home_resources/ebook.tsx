/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import CircleBg from '../reuseables/circleBg';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';
import EBOOK__SCHEMA from './ebook.json';

interface obj {
    id: number,
    image: string,
    price: number
}
function Ebook() {
  const ebook: obj[] = EBOOK__SCHEMA;
  return (
    <>
      <Navbar />
      <div className="ebook py-5 mt-5">
        <div className="container">
          <div className="row justify-content-center text-center py-3">
            <div className="ebook--title">
              <CircleBg text="Playbook" />
            </div>
            <p className="ebook--text mb-5">
              Digital resources for entrepreneurs and business
              <br />
              owners changing the status quo
            </p>
            {
            ebook?.map(({ id, image, price }) => (
              <div className="col-md-4 col-lg-4 g-4" key={id}>
                <div className="card border-0 mt-0 p-3 p-md-4  ebook__card">
                  <img src={image} alt="" className="img-fluid px-3" />
                  <div className="d-flex m-3">
                    <button type="button" className="ebook__card--btn"> Download </button>
                    <span className="ebook__card--span">{price}</span>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Ebook;
