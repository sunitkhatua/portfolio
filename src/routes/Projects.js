import React from 'react'

import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
// import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="This is my projects" />
      <Work/>
      <Footer/>
    </div>
  );
};

export default Projects