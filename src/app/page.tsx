import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import HowToBuy from '../components/HowToBuy';
import ListedOn from '../components/ListedOn';
import AtmFeature from '../components/AtmFeature';
import ImageSection from '../components/ImageSection';
import Roadmap from '../components/Roadmap';
import SmoothScrollEffect from '../components/SmoothScrollEffect';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      
      <Hero />
      <WhoWeAre />
      <About />
      <HowToBuy />
      <ListedOn />
      <Roadmap />
      <AtmFeature />
      <Tokenomics />
      <ImageSection />
    </main>
  );
}
