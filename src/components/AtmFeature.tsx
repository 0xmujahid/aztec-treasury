"use client";

import React from 'react';
import Image from 'next/image';

export default function AtmFeature() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark/90 to-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
            <div className="relative h-[400px] w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/atmmachine.jpg"
                alt="Aztec Coin ATM"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-dark/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
                <h3 className="text-xl text-primary font-bold">Zero-Fee ATMs</h3>
                <p className="text-sm text-gray-300">Coming to major cities worldwide</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Get in now,</span> and claim your treasure!
            </h2>
            
            <div className="bg-dark/50 p-8 rounded-xl border border-primary/20 mb-8">
              <p className="text-xl text-gray-200 mb-6">
                Soon, you'll be able to withdraw and deposit your $AZT through Aztec Coin ATMs with zero fees. Our ATMs will make accessing your funds even easier, anywhere, anytime.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-dark rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">Zero Transaction Fees</h4>
                    <p className="text-gray-300">No hidden costs or transaction fees when using our ATMs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-dark rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">Instant Access</h4>
                    <p className="text-gray-300">Withdraw and deposit your $AZT instantly 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-dark rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">Global Network</h4>
                    <p className="text-gray-300">ATMs planned for major cities worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
                Join Waitlist
              </button>
              <button className="border-2 border-primary hover:bg-primary/20 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Countdown / Coming Soon */}
        
      </div>
    </section>
  );
} 