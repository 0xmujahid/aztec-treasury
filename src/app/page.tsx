import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import HowToBuy from '../components/HowToBuy';
import ListedOn from '../components/ListedOn';
import AtmFeature from '../components/AtmFeature';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <About />
      <HowToBuy />
      <ListedOn />
      <Roadmap />
      <AtmFeature />
      <Tokenomics />
      <Footer />
    </main>
  );
}
