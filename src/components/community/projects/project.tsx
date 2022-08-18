/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Footer from '../../reuseables/footer';
// eslint-disable-next-line import/extensions
import Hero from '../../reuseables/hero';
// eslint-disable-next-line import/extensions
import Navbar from '../../reuseables/navbar';
import Partnering from '../partnering';
// eslint-disable-next-line import/extensions
import ProjectCards from './project-card';

function Project() {
  return (
    <>
      <Navbar />
      <Hero title="Project" bgImage="/images/program/projecthero.png" text="We are relentless in our desire to transform underserved university communities." gradient="rgba(6, 0, 22, 0.5)" />
      <ProjectCards />
      <Partnering />
      <Footer />
    </>
  );
}
export default Project;
