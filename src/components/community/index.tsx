/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../reuseables/footer';
import Hero2 from '../reuseables/hero2';
import Navbar from '../reuseables/navbar';
import Packages from './packages';
import Workspace from './workspace';

function Community() {
  return (
    <>
      <Navbar />
      <Hero2
        title="Refreshing + creative environment"
        bgImage="/images/program/heroInnovation.png"
        gradient="rgba(6, 0, 22, 0.65)"
        text="We provide the ambience, serenity, functionality and flexibility you need to achieve your work goals.
        "
      />
      <Workspace />
      <Packages />
      <Footer />
    </>
  );
}
export default Community;
