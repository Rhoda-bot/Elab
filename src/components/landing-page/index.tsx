/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Events from '../reuseables/events';
import Footer from '../reuseables/footer';
import Hero from '../reuseables/hero';
import Measures from '../reuseables/measures';
import Media from '../reuseables/media';
import Navbar from '../reuseables/navbar';
import Ourstory from '../reuseables/ourstory';
import Partners from '../reuseables/partners';
import Trainings from '../reuseables/trainings';
import WorkSpaces from '../reuseables/workspaces';

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        circleText="Unlocking"
        title="prosperity in africas underserved university communities"
        text="We plug individuals Startups, SMEs and Higher
            Education
            Institution into the global economy"
        button="Learn More"
        bgImage="/images/home.jpg"
        gradient="rgba(6, 0, 22, 0.55)"
      />
      <Ourstory />
      <Measures />
      <WorkSpaces />
      <Partners />
      <Events />
      <Media />
      <Trainings />
      <Footer />
    </>
  );
}
export default Home;
