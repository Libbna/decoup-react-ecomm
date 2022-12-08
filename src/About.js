import React from 'react';
import HeroSection from './components/HeroSection';

function About() {

    const data = {
        title: "About"
    };
    return (
        <HeroSection myData={data} />
    );
}

export default About;