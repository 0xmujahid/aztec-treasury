"use client";

import React, { useEffect, useState } from 'react';

const SmoothScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate effects based on scroll position
  // Section boundaries (approximate heights where sections start)
  const heroToWhoWeAre = 800;
  const whoWeAreToAbout = 1600;
  
  // Transition zone height
  const transitionZone = 300;
  
  // Calculate the primary gradient effect opacity
  let primaryOpacity = 0;
  
  // For hero to who-we-are transition
  if (scrollY > heroToWhoWeAre - transitionZone && scrollY < heroToWhoWeAre + transitionZone) {
    // Linear interpolation for smooth opacity
    if (scrollY < heroToWhoWeAre) {
      primaryOpacity = (scrollY - (heroToWhoWeAre - transitionZone)) / transitionZone;
    } else {
      primaryOpacity = 1 - ((scrollY - heroToWhoWeAre) / transitionZone);
    }
  }
  
  // For who-we-are to about transition
  if (scrollY > whoWeAreToAbout - transitionZone && scrollY < whoWeAreToAbout + transitionZone) {
    if (scrollY < whoWeAreToAbout) {
      primaryOpacity = (scrollY - (whoWeAreToAbout - transitionZone)) / transitionZone;
    } else {
      primaryOpacity = 1 - ((scrollY - whoWeAreToAbout) / transitionZone);
    }
  }
  
  // Calculate the most active section boundary for effects
  let activeBoundary = null;
  let boundaryDistance = 0;
  
  // Check distance to hero/who-we-are boundary
  boundaryDistance = Math.abs(scrollY - heroToWhoWeAre);
  if (boundaryDistance < 200) {
    activeBoundary = heroToWhoWeAre;
  }
  
  // Check distance to who-we-are/about boundary
  const distToSecondBoundary = Math.abs(scrollY - whoWeAreToAbout);
  if (distToSecondBoundary < boundaryDistance && distToSecondBoundary < 200) {
    activeBoundary = whoWeAreToAbout;
    boundaryDistance = distToSecondBoundary;
  }
  
  // Calculate light beam effect - stronger around the active boundary
  const beamIntensity = activeBoundary ? Math.max(0, 1 - boundaryDistance / 100) : 0;
  
  return (
    <>
      {/* Main overlay gradient effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-40 transition-opacity duration-300"
        style={{
          opacity: primaryOpacity * 0.4, // Reduced base opacity
          background: 'linear-gradient(180deg, transparent, var(--color-primary) 50%, transparent)',
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Light beam effect at section boundary */}
      <div 
        className="fixed inset-0 pointer-events-none z-41 transition-opacity duration-200"
        style={{
          opacity: beamIntensity * 0.6,
          background: 'radial-gradient(circle at center, var(--color-primary) 5%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />
      
      {/* Black fade overlay at section boundaries */}
      <div 
        className="fixed inset-0 pointer-events-none z-39 transition-opacity duration-300"
        style={{
          opacity: beamIntensity * 0.15, // Very subtle darkening
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 30%, transparent 70%, rgba(0,0,0,0.5))',
        }}
      />
    </>
  );
};

export default SmoothScrollEffect; 