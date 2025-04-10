"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the transition effect based on scroll position relative to this section
  const sectionTop = 800; // Approximate position where this section starts
  const transitionZone = 300; // Height of transition zone
  
  // Fade in the top gradient when approaching this section and fade it out as we scroll past
  let transitionOpacity = 0;
  
  if (scrollY > sectionTop - transitionZone && scrollY < sectionTop + 200) {
    // Fade in during approach
    if (scrollY < sectionTop) {
      transitionOpacity = (scrollY - (sectionTop - transitionZone)) / transitionZone;
    } else {
      // Fade out as we scroll deeper into the section
      transitionOpacity = 1 - Math.min((scrollY - sectionTop) / 200, 1);
    }
  }
  
  return (
    <section className="py-20 relative section-boundary section-boundary-top section-boundary-bottom">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/header2.jpg"
          alt="Who We Are Background"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-70"
        />
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/85 to-dark/80"></div>
        
        {/* Strong fade-to-black gradient at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      {/* Visual section divider at top - always visible */}
      <div className="absolute top-0 left-0 right-0 z-10">
        {/* Soft glow effect */}
        <div className="w-full h-[8px] bg-gradient-to-t from-primary/30 to-transparent"></div>
        {/* Gold accent line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
      </div>
      
      {/* Visual section divider at bottom - always visible */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Gold accent line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
        {/* Soft glow effect */}
        <div className="w-full h-[8px] bg-gradient-to-b from-primary/30 to-transparent"></div>
      </div>
      
      {/* Transition gradient from hero section - fades based on scroll position */}
      <div 
        className="section-transition-top transition-opacity duration-300 pointer-events-none"
        style={{ opacity: transitionOpacity }}
      ></div>
      
      {/* Section label - helps identify the different section */}
      <div className="section-label">
        <span>Who We Are</span>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Who We Are</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark/70 p-8 rounded-lg border border-primary/20 backdrop-blur-sm mb-12">
            <p className="text-lg text-white text-center leading-relaxed font-medium">
              Aztec Coin is a treasure hunt rewarding those who understand the power of long-term holding. Built on the Solana network, it offers fast, low-cost transactions with a limited supply, ensuring both scarcity and real value.
            </p>
          </div>
            
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
              Our Vision
            </h3>
            <div className="bg-dark/70 p-8 rounded-lg border border-primary/20 backdrop-blur-sm">
              <p className="text-lg text-white text-center leading-relaxed font-medium">
                To build a community of forward-thinkers who value scarcity and long-term growth. By embracing Aztec Coin, you're not just investing in a cryptocurrency — you're embarking on a journey to uncover wealth through the power of limited supply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 