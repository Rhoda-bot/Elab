/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../reuseables/footer';
import Hero from '../reuseables/hero';
import Navbar from '../reuseables/navbar';
import ServiceProvider from './services';

function Services() {
  return (
    <>
      <Navbar />
      <Hero bgImage="/images/services/hero-services.png" gradient="rgba(6, 0, 22, 0.7)" button="Learn More" title="Digital Services" text="We strive to create technological solutions that will help advance our client's business and solve real-life problems using strategic and high-level technology to drive and power business growth." />
      <ServiceProvider />
      <Footer />
    </>
  );
}
export default Services;
