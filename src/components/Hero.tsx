"use client";

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark text-white overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/70 to-dark"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-30 z-0">
        <Image 
          src="/images/shutterstock_2571870219.jpg" 
          alt="Aztec Treasury Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center">
          <span className="text-primary">Aztec</span> Treasury
        </h1>
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-xl md:text-2xl mb-6 font-light">
            Limited supply of 15 million coins. Uncover the Hidden Treasure of Modern Cryptocurrency
          </h2>

          <div className="relative">
            {/* Shadow beneath coin */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-primary/30 rounded-full blur-md coin-shadow"></div>
            
            {/* Coin container with perspective for 3D effect */}
            <div className="coin-container h-64 w-64 mx-auto my-8 perspective-1000">
              {/* Coin wrapper - this rotates */}
              <div className="coin-wrapper relative h-full w-full preserve-3d">
                {/* Front of coin */}
                <div className="absolute inset-0 backface-hidden coin-face">
                  <Image 
                    src="/images/New Logo for Aztec.png" 
                    alt="Aztec Token Front"
                    width={256}
                    height={256}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Back of coin */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 coin-face">
                  <Image 
                    src="/images/New Logo for Aztec.png" 
                    alt="Aztec Token Back"
                    width={256}
                    height={256}
                    className="w-full h-full"
                    style={{ transform: 'scaleX(-1)' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <button
              className="
                bg-primary hover:bg-secondary 
                text-dark font-bold py-3 px-8 
                rounded-full transition-all 
                duration-300 transform 
                hover:scale-105 active:scale-95
                text-lg shadow-lg
                active:shadow-inner
                relative overflow-hidden
              "
            >
              Buy AZTEC Now
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 