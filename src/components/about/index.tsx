/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../reuseables/footer';
import Hero from '../reuseables/hero';
import Navbar from '../reuseables/navbar';
// import Testimonials from '../reuseables/testimonial';
import VisionMission from '../reuseables/visionmission';
// import TimeLine from './graph';
import Teams from './teams';
import Values from './values';

function About() {
  return (
    <>
      <Navbar />
      <Hero title="Innovation and enterprise thinking is richly engrained in who we are and in our history." bgImage="/images/about/hero1.png" gradient="rgba(6, 0, 22, 0.55)" />
      <VisionMission />
      <Values />
      <Teams />
      {/* <Testimonials /> */}
      {/* <TimeLine /> */}
      <Footer />
    </>
  );
}
export default About;
