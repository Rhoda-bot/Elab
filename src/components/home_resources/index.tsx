/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';
import HomeBlog from './blogs';

function HomeResource() {
  return (
    <>
      <Navbar />
      <HomeBlog />
      <Footer />
    </>
  );
}
export default HomeResource;
