import React from 'react';
import styled from 'styled-components';
import FeatureProducts from './components/FeatureProducts';
import HeroSection from './components/HeroSection';

const Home = () => {

  const data = {
    title: "Welcome to"
  };

  return (
    <>
      <HeroSection myData={data}></HeroSection>
      <FeatureProducts />
    </>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg} ;
`;

export default Home;