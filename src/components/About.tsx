"use client";

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 pt-24 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/2.jpg" 
          alt="Aztec Treasure Concept"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Discover the Future
            </span>  of Cryptocurrency
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-primary text-center">The Hidden Treasury</h3>
          <p className="text-lg mb-10 text-gray-200 text-center">
            Aztec Coin is a treasure hunt rewarding those who understand the power of long-term holding. Built on the Solana network, it offers fast, low-cost transactions with a limited supply, ensuring both scarcity and real value.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-dark/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2 text-primary">Solana-Based</h4>
              <p className="text-gray-300">
                Fast, reliable, and low-cost transactions
              </p>
            </div>
            <div className="bg-dark/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2 text-primary">Limited Supply</h4>
              <p className="text-gray-300">
                Only 15 million coins will ever exist
              </p>
            </div>
            <div className="bg-dark/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2 text-primary">Community-Driven</h4>
              <p className="text-gray-300">
                100% transparent with no taxes and burnt liquidity
              </p>
            </div>
            <div className="bg-dark/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2 text-primary">ATM Network</h4>
              <p className="text-gray-300">
                Zero-fee ATMs coming soon for easy access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 