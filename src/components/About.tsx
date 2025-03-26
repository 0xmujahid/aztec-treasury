"use client";

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark to-dark/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Discover the Future
            </span>  of Cryptocurrency
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
            <div className="relative overflow-hidden rounded-xl">
              <Image 
                src="/images/shutterstock_2425153103.jpg" 
                alt="Aztec Treasure Concept"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">The Hidden Treasury</h3>
            <p className="text-lg mb-6 text-gray-200">
              Aztec Coin is a treasure hunt rewarding those who understand the power of long-term holding. Built on the Solana network, it offers fast, low-cost transactions with a limited supply, ensuring both scarcity and real value.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-2 text-primary">Solana-Based</h4>
                <p className="text-gray-300">
                  Fast, reliable, and low-cost transactions
                </p>
              </div>
              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-2 text-primary">Limited Supply</h4>
                <p className="text-gray-300">
                  Only 15 million coins will ever exist
                </p>
              </div>
              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-2 text-primary">Community-Driven</h4>
                <p className="text-gray-300">
                  100% transparent with no taxes and burnt liquidity
                </p>
              </div>
              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-2 text-primary">ATM Network</h4>
                <p className="text-gray-300">
                  Zero-fee ATMs coming soon for easy access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 