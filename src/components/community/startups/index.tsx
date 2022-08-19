import React from 'react';
import Footer from '../../reuseables/footer';
import Navbar from '../../reuseables/navbar';
import Partnering from '../partnering';
import Startups from './startups';

function Startup() {
  return (
    <>
      <Navbar />
      <Startups />
      <Partnering />
      <Footer />
    </>
  );
}
export default Startup;
