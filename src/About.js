import React from 'react';
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productContext';
// import { AppContext } from './context/productContext';

function About() {

  const { name } = useProductContext();
  const data = {
    title: "About"
  };
  return (
    <>
      {name}
      <HeroSection myData={data} />
    </>
  );
}

export default About;