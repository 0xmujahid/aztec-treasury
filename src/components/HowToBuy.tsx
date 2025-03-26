"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HowToBuy() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Set Up Your Wallet",
      description: "Get a Solana-compatible wallet like Phantom or Sollet.",
      image: "/images/shutterstock_2425153259.jpg", // Using one of the available images
      icon: "wallet",
    },
    {
      title: "Buy Solana (SOL)",
      description: "You'll need SOL to swap for $AZT. Purchase it from exchanges like Coinbase, Kraken, or Binance.",
      image: "/images/shutterstock_2424677341.jpg",
      icon: "coins",
    },
    {
      title: "Connect to Jup.ag or Radium.io",
      description: "Head to Jup.ag or Radium.io, connect your wallet, and make sure you're on the Solana network.",
      image: "/images/shutterstock_2450963731.jpg",
      icon: "link",
    },
    {
      title: "Swap SOL for $AZT",
      description: "Search for Aztec Coin ($AZT), enter the amount of SOL you want to swap, and confirm the transaction. That's it! You now own your share of the Hidden Treasury.",
      image: "/images/shutterstock_2571870219.jpg",
      icon: "exchange-alt",
    },
    {
      title: "Hold & Join the Community",
      description: "Once you've got $AZT, it's time to stake, hold, or trade. Join the Hidden Treasures Community and start your journey towards wealth.",
      image: "/images/shutterstock_2450963731.jpg",
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
          {/* Slider */}
          <div className="relative bg-dark/50 rounded-2xl overflow-hidden shadow-xl border border-primary/20">
            {/* Image */}
            <div className="relative h-64 md:h-96">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${activeStep === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="p-8 relative z-20 -mt-20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark text-xl font-bold mr-4">
                  {activeStep + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">{steps[activeStep].title}</h3>
              </div>
              
              <p className="text-lg text-gray-200 mb-8 ml-16">
                {steps[activeStep].description}
              </p>

              {/* Progress indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeStep === index
                        ? 'bg-primary w-10'
                        : 'bg-gray-500 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Steps numbers with icons underneath */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`text-center p-4 rounded-lg transition-all ${
                  activeStep === index 
                    ? 'bg-primary/20 transform scale-105' 
                    : 'bg-dark/30 hover:bg-dark/50 cursor-pointer'
                }`}
                onClick={() => goToStep(index)}
              >
                <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-2 transition-colors ${
                  activeStep === index ? 'bg-primary text-dark' : 'bg-dark/50 text-primary'
                }`}>
                  <i className={`fas fa-${step.icon}`}></i>
                </div>
                <p className={`font-bold transition-colors ${activeStep === index ? 'text-primary' : 'text-gray-300'}`}>
                  Step {index + 1}
                </p>
                <p className="text-sm mt-1 text-gray-400">{step.title}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <a 
              href="https://jup.ag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Buy $AZT Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 