/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../reuseables/footer';
import Hero from '../reuseables/hero';
import Navbar from '../reuseables/navbar';
import VisionMission from '../reuseables/visionmission';
import Teams from './teams';
import Values from './values';

function About() {
  return (
    <>
      <Navbar />
      <Hero title="Appropriate Content is needed for this section " bgImage="/images/about/hero1.png" gradient="rgba(6, 0, 22, 0.55)" />
      <VisionMission />
      <Values />
      <Teams />
      <Footer />
    </>
  );
}
export default About;
