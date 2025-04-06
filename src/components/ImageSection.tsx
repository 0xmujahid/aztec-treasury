"use client";

import React from 'react';
import Image from 'next/image';

export default function ImageSection() {
  return (
    <section className="bg-dark relative py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/3.jpg"
          alt="Aztec Coin"
          fill
          style={{ 
            objectFit: 'cover',
            filter: 'brightness(0.7)' // Darkened for better text visibility
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Text Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Disclaimer */}
          <div className="bg-dark/90 p-6 rounded-lg border border-primary/30 backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-3">Disclaimer</h3>
            <p className="text-white leading-relaxed">
              Aztec Coin is a treasure for the bold, but crypto is risky. Only invest what you can afford to lose. 
              Do your research—the Hidden Treasures come with their share of adventure.
            </p>
          </div>
          
          {/* Follow Us */}
          <div className="bg-dark/90 p-6 rounded-lg border border-primary/30 backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-3">Follow Us</h3>
            <p className="text-white leading-relaxed mb-4">
              Join the Hidden Treasures Community and start your journey towards wealth.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                <i className="fab fa-twitter text-primary"></i>
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                <i className="fab fa-telegram text-primary"></i>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                <i className="fab fa-discord text-primary"></i>
              </a>
            </div>
          </div>
          
          {/* Enjoy the Journey */}
          <div className="bg-dark/90 p-6 rounded-lg border border-primary/30 backdrop-blur-sm shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-3">Enjoy the Journey</h3>
            <p className="text-white leading-relaxed">
              When you hold Aztec Coin you're part of the Hidden Treasures Community that understands the true potential of limited assets. 
              Share insights, have fun and watch your wealth grow.
            </p>
          </div>
        </div>
      </div>
      
      {/* Character Container */}
      <div className="relative h-[350px] md:h-[450px] overflow-hidden mt-8">
        {/* Cartoon Character */}
        <div className="absolute left-4 md:left-8 lg:left-12 bottom-0 w-[200px] h-[300px] md:w-[350px] md:h-[450px] z-20 animate-float">
          <Image
            src="/images/cartoon.png"
            alt="Cartoon Character"
            fill
            style={{ 
              objectFit: 'contain',
              filter: 'drop-shadow(4px 8px 12px rgba(0, 0, 0, 0.5))' // Adds a shadow effect
            }}
          />
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 