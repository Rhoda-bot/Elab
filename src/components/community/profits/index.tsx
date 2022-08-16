/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Hero2 from '../../reuseables/hero2';
import ProfitCard from './profit-cards';

function Profits() {
  return (
    <>
      <Hero2 title="eLab Non-Profit" text=" We seek to transform our community one project at a time." button="Donate" bgImage="/images/program/non-profit-hero.png" gradient="rgba(0, 0, 0, 0.5)" />
      <ProfitCard />
    </>
  );
}
export default Profits;
