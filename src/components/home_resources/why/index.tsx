import React from 'react';
import Footer from '../../reuseables/footer';
import Hero from '../../reuseables/hero';
import Navbar from '../../reuseables/navbar';
import Founders from './founders';

function Whys() {
  return (
    <>
      <Navbar />
      <Hero title="Find your Y" bgImage="/images/why/whyhero.png" text="Digital resources for entrepreneurs and business owners changing the status quo" gradient="rgba(6, 0, 22, 0.65)" />
      <Founders />
      <Footer />
    </>
  );
}
export default Whys;
