import React from 'react';
import Footer from '../reuseables/footer';
import Hero from '../reuseables/hero';
import Navbar from '../reuseables/navbar';
// import Testimonials from '../reuseables/testimonial';
import Brands from './brands';
import Consults from './consult';

function Consultation() {
  return (
    <>
      <Navbar />
      <Hero title="Business Consulting" bgImage="/images/services/hero-services.png" gradient="rgba(6, 0, 22, 0.7)" text="Building a clear path to help our clients deliver organizational success." button="Book a Session" />
      <Consults />
      <Brands />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
export default Consultation;
