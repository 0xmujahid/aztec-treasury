"use client";

import React from 'react';
import Image from 'next/image';

export default function ListedOn() {
  const exchanges = [
    {
      name: "Jup.ag",
      logo: "/images/jupiter-ag-jup-logo.png", // Using Aztec logo as placeholder (would need proper Jup.ag logo)
      url: "https://jup.ag",
      description: "Jupiter Aggregator - Best price swaps on Solana"
    },
    {
      name: "Radium.io",
      logo: "/images/raydium-ray-logo.png", // Using Aztec logo as placeholder (would need proper Raydium logo)
      url: "https://raydium.io",
      description: "Leading AMM and DeFi protocol on Solana"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dark to-dark/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Listed</span> On
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aztec Coin is available on these trusted exchanges
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Exchanges list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exchanges.map((exchange, index) => (
              <a 
                key={index} 
                href={exchange.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark/50 p-6 rounded-xl border border-primary/20 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-primary/50 group"
              >
                <div className="w-24 h-24 mb-4 relative">
                  <Image 
                    src={exchange.logo} 
                    alt={`${exchange.name} logo`} 
                    width={100} 
                    height={100}
                    className="rounded-lg object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{exchange.name}</h3>
                <p className="text-gray-300 text-center mb-4">{exchange.description}</p>
                <span className="bg-primary/10 text-primary py-2 px-4 rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  Trade $AZT Now
                </span>
              </a>
            ))}
          </div>

          {/* Upcoming exchanges */}
          <div className="mt-16 text-center">
            <div className="bg-dark/30 p-8 rounded-xl border border-primary/10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-primary">Coming Soon</h3>
              <p className="text-lg text-gray-300 mb-6">
                Stay tuned as we expand our presence and bring Aztec Coin to more platforms and exchanges in the near future. The quest is just getting started!
              </p>
              
              <div className="flex justify-center space-x-2">
                <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 