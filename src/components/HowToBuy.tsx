"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HowToBuy() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Set Up Your Wallet",
      description: "Get a Solana-compatible wallet like Phantom or Sollet.",
      image: "/images/wallet2.png", // Using one of the available images
      icon: "wallet",
    },
    {
      title: "Buy Solana (SOL)",
      description: "You'll need SOL to swap for $AZT. Purchase it from exchanges like Coinbase, Kraken, or Binance.",
      image: "/images/buy2.png",
      icon: "coins",
    },
    {
      title: "Connect to Jup.ag or Radium.io",
      description: "Head to Jup.ag or Radium.io, connect your wallet, and make sure you're on the Solana network.",
      image: "/images/connect2.png",
      icon: "link",
    },
    {
      title: "Swap SOL for $AZT",
      description: "Search for Aztec Coin ($AZT), enter the amount of SOL you want to swap, and confirm the transaction. That's it! You now own your share of the Hidden Treasury.",
      image: "/images/swapping.png",
      icon: "exchange-alt",
    },
    {
      title: "Hold & Join the Community",
      description: "Once you've got $AZT, it's time to stake, hold, or trade. Join the Hidden Treasures Community and start your journey towards wealth.",
      image: "/images/community.png",
      icon: "users",
    }
  ];

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [steps.length]);

  // Manually change slide
  const goToStep = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section id="how-to-buy" className="py-20 bg-gradient-to-b from-dark/90 to-dark text-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-primary">How to Buy</span> Aztec Coin ($AZT)
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Follow these simple steps to become part of the Hidden Treasury
        </p>
      </div>
  
      <div className="max-w-5xl mx-auto">
        {/* Enhanced Slider */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Image Slider */}
          <div className="relative w-full aspect-video bg-dark/50">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeStep === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10"></div>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
  
          {/* Step Content */}
          <div className="p-8 relative z-20 -mt-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark text-xl font-bold mr-4">
                {activeStep + 1}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                {steps[activeStep].title}
              </h3>
            </div>
            
            <p className="text-lg text-gray-200 mb-8 ml-16">
              {steps[activeStep].description}
            </p>
          </div>
  
          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 px-8 pb-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-primary w-8'
                    : 'bg-gray-600 hover:bg-primary/70'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
  
        {/* Community Benefits */}
        <div className="mt-16 bg-gradient-to-r from-dark/80 to-dark/60 p-8 rounded-xl border border-primary/30 backdrop-blur-sm shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-4 text-center">Join The Hidden Treasures Community</h3>
          <p className="text-lg text-gray-300 text-center leading-relaxed mb-6">
            When you hold Aztec Coin you're part of a community that understands the true potential of limited assets.
            Share insights, have fun, and watch your wealth grow together.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
              className="bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg transition-colors flex items-center">
              <i className="fab fa-twitter mr-2"></i> Twitter
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" 
              className="bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg transition-colors flex items-center">
              <i className="fab fa-telegram mr-2"></i> Telegram
            </a>
          </div>
              </div>
  
        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            href="https://jup.ag" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-dark font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block transform hover:scale-105 shadow-lg hover:shadow-primary/30"
          >
            Buy $AZT Now
          </a>
        </div>
      </div>
    </div>
  </section>
  );
} 