/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Hero2 from '../reuseables/hero2';
import Navbar from '../reuseables/navbar';
import TrainingDetails from './training-details';
import Footer from '../reuseables/footer';
import TrainingHeader from './training-header';

function HomeTrainings() {
  return (
    <>
      <Navbar />
      <Hero2 title="Header Text for Training Here" text="some dommy text here" button="Register" bgImage="/images/services/training-hero.png" gradient="rgba(0, 0, 0, 0.7)" />
      <TrainingDetails />
      <TrainingHeader />
      <Footer />
    </>
  );
}
export default HomeTrainings;
