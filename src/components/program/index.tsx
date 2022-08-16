/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Footer from '../reuseables/footer';
import Hero2 from '../reuseables/hero2';
import Navbar from '../reuseables/navbar';
import Testimonials from '../reuseables/testimonial';
import Benefits from './benefits';
import Enterpreneurs from './enterpreneur';

function Programs() {
  return (
    <>
      <Navbar />
      <Hero2
        title="Trybe by eLab"
        text="The Trybe by eLab community is
     a resourceful online community for tech-enthusiasts and entrepreneurs"
        button="Join Tyrbe"
        bgImage="/images/about/hero1.png"
        gradient="rgba(6, 0, 22, 0.65)"
        // gradient2="rgba(6, 0, 22, 0.65)"
      />
      <Benefits />
      <Testimonials />
      <Enterpreneurs />
      <Footer />
    </>
  );
}
export default Programs;
