"use client";

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 pt-24 relative section-boundary section-boundary-top">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark/90"></div>
        
        {/* Fade from black at the top to create continuity with WhoWeAre section */}
        <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-black to-transparent"></div>
      </div>
      
      {/* Visual section divider at top - always visible */}
      <div className="absolute top-0 left-0 right-0 z-10">
        {/* Soft glow effect */}
        <div className="w-full h-[8px] bg-gradient-to-t from-primary/30 to-transparent"></div>
        {/* Gold accent line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-500">Discover the Future of Cryptocurrency</span> with Aztec Coin
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-primary text-center tracking-wide">The Coin of Legends</h3>
          
          <div className="bg-dark/40 p-8 rounded-xl border border-primary/30 backdrop-blur-sm shadow-lg mb-10 transform hover:scale-[1.02] transition-transform duration-300">
            <p className="text-xl mb-6 text-gray-100 text-center leading-relaxed">
              Aztec Coin is more than just a cryptocurrency. It's your key to uncovering hidden wealth. Hold long-term and find your treasure as the value of Aztec Coin grows.
            </p>
            
            <p className="text-xl mb-6 text-primary text-center font-bold">
              Limited quantity with maximum value -- get your Aztec coin today.
            </p>
          </div>
          
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-primary/20 to-yellow-500/20 px-8 py-4 rounded-lg border border-primary/30">
              <p className="text-2xl md:text-3xl text-primary font-bold tracking-wide">
                $AZT – The Coin of Legends, Built for Kings & Crypto Warriors!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark/40 p-6 rounded-lg border border-primary/30 backdrop-blur-sm shadow-lg">
              <p className="text-lg text-gray-100 text-center leading-relaxed">
                Aztec Coin is here to conquer the crypto world. Aztec Coin is here to claim its rightful place as the true ruler of the meme coin empire. Hold long-term, unlock treasures, and watch your riches grow.
              </p>
            </div>
            <div className="bg-dark/40 p-6 rounded-lg border border-primary/30 backdrop-blur-sm shadow-lg">
              <p className="text-lg text-gray-100 text-center leading-relaxed">
                Aztec Coin is 100% community-driven and fully transparent.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10 mb-16 bg-gradient-to-r from-primary/10 to-yellow-500/10 p-8 rounded-xl border border-primary/30">
            <h4 className="text-3xl font-bold text-primary mb-6 tracking-wide">The Treasure Awaits, For Those Who Dare to Hold!</h4>
            <p className="text-xl text-gray-100 italic">
              The path to untold fortunes and hidden wealth, waiting for the true seekers to discover. Are you ready?
            </p>
          </div>
          
          {/* Feature grid section - currently commented out
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-dark/50 p-6 rounded-lg border border-primary/30 backdrop-blur-sm shadow-lg hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-2 text-primary">Solana-Based</h4>
              <p className="text-gray-300">
                Fast, reliable, and low-cost transactions
              </p>
            </div>
            <div className="bg-dark/50 p-6 rounded-lg border border-primary/30 backdrop-blur-sm shadow-lg hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-2 text-primary">Limited Supply</h4>
              <p className="text-gray-300">
                Only 15 million coins will ever exist
              </p>
            </div>
            <div className="bg-dark/50 p-6 rounded-lg border border-primary/30 backdrop-blur-sm shadow-lg hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-2 text-primary">Community-Driven</h4>
              <p className="text-gray-300">
                100% transparent with no taxes and burnt liquidity
              </p>
            </div>
            <div className="bg-dark/50 p-6 rounded-lg border border-primary/30 backdrop-blur-sm shadow-lg hover:border-primary/50 transition-all duration-300">
              <h4 className="text-xl font-bold mb-2 text-primary">ATM Network</h4>
              <p className="text-gray-300">
                Zero-fee ATMs coming soon for easy access
              </p>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
} 