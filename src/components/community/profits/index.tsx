/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Footer from '../../reuseables/footer';
import Hero2 from '../../reuseables/hero2';
import Navbar from '../../reuseables/navbar';
import ProfitCard from './profit-cards';

function Profits() {
  return (
    <>
      <Navbar />
      <Hero2 title="eLab Non-Profit" text=" We seek to transform our community one project at a time." button="Donate" bgImage="/images/program/non-profit-hero.png" gradient="rgba(0, 0, 0, 0.5)" />
      <ProfitCard />
      <Footer />
    </>
  );
}
export default Profits;
