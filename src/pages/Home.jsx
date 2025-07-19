// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;