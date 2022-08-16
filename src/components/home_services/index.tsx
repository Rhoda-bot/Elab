/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../reuseables/footer';
import Hero2 from '../reuseables/hero2';
import Navbar from '../reuseables/navbar';
import Trainings from '../reuseables/trainings';

function HomeServices() {
  return (
    <>
      <Navbar />
      <Hero2 title="eLab Learning" text="Equipping the next generation in relevant tech skills." bgImage="/images/services/training-hero.png" gradient="rgba(0, 0, 0, 0.7)" />
      <Trainings />
      <Footer />
    </>
  );
}
export default HomeServices;
