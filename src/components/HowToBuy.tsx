"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { Cinzel, Playfair_Display, Orbitron } from 'next/font/google';

// Load custom fonts
const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
});

export default function HowToBuy() {
  // Add state for mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Add state for copied notification
  const [copied, setCopied] = useState(false);
  
  // Function to copy address to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText("G7BFnuGmwF43STzvzkttMzkCGsqYviHTCTvXtguTFjEG")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  // Effect to detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Section reference for all animations
  const sectionRef = useRef(null);
  
  // Get scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Central image reference
  const centralImageRef = useRef(null);
  
  // Create scale and opacity effects for central image and all cards
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.5]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Create scale effects for cards with slight variations in timing
  const card1Scale = useTransform(scrollYProgress, [0, 0.7], [0.9, 1.3]);
  const card2Scale = useTransform(scrollYProgress, [0.05, 0.75], [0.9, 1.3]);
  const card3Scale = useTransform(scrollYProgress, [0.1, 0.8], [0.9, 1.3]);
  const card4Scale = useTransform(scrollYProgress, [0.15, 0.85], [0.9, 1.3]);
  const card5Scale = useTransform(scrollYProgress, [0.2, 0.9], [0.9, 1.3]);
  
  // Create stronger scale effects for mobile cards
  const mobileCard1Scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.25]);
  const mobileCard2Scale = useTransform(scrollYProgress, [0.05, 0.55], [0.8, 1.25]);
  
  // Create opacity effects for cards with slight variations in timing
  const card1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const card4Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const card5Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  
  // Steps data
  const steps = [
    {
      id: 1,
      title: "Create a Wallet",
      description: "Download and set up a supported cryptocurrency wallet (Metamask, Phantom, etc.)",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Get Base Currency",
      description: "Purchase the base currency needed (ETH, SOL, etc.) from a supported exchange",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Connect Wallet",
      description: "Connect your wallet to our supported decentralized exchange (DEX)",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 4,
      title: "Swap for $AZT",
      description: "Enter the amount and confirm your swap transaction to receive $AZT",
      color: "from-amber-500 to-yellow-600"
    },
    {
      id: 5,
      title: "HODL & Prosper",
      description: "Hold your $AZT tokens and watch your wealth grow over time",
      color: "from-red-500 to-orange-600"
    },
  ];

  // Add reference for CTA section
  const ctaRef = useRef(null);
  
  // Scroll tracking for CTA
  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  
  // Create scale and opacity effects for CTA text
  const ctaScale = useTransform(
    ctaScrollProgress, 
    [0, 0.5], 
    [isMobile ? 0.9 : 0.85, 1.1]
  );
  const ctaOpacity = useTransform(ctaScrollProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] text-white overflow-hidden relative py-20" id="howToBuy">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,203,5,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        {/* Title with stylish font */}
        <motion.div
          className={`${cinzel.className} text-center mb-20`}
          style={{
            scale: textScale,
            opacity: textOpacity
          }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-600 pb-2 inline-block">
            How to Buy $AZT Coin
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto opacity-60 mt-4"></div>
        </motion.div>
        
        {/* Mobile layout: Cards 1 and 2 at top, then image */}
        <div className="flex flex-col lg:hidden gap-8 mb-12">
          {/* Card 1 - First on mobile - SMALLER SIZE */}
          <motion.div 
            className="group max-w-[85%] mx-auto transform-gpu"
            style={{ 
              scale: mobileCard1Scale,
              opacity: card1Opacity
            }}
          >
            <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-purple-500/30 to-purple-600/30 group-hover:from-purple-400/60 group-hover:via-purple-500/60 group-hover:to-purple-600/60 transition-all duration-500 animate-pulse"></div>
              
              {/* Card content */}
              <div className="relative bg-black/60 backdrop-blur-sm p-4 rounded-xl h-full flex flex-col">
                <div className={`${orbitron.className} flex items-center mb-2`}>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">
                    {steps[0].title}
                  </h3>
                </div>
                <p className="text-purple-100/70 text-xs">
                  {steps[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Second on mobile - SMALLER SIZE */}
          <motion.div 
            className="group max-w-[85%] mx-auto transform-gpu"
            style={{ 
              scale: mobileCard2Scale,
              opacity: card2Opacity
            }}
          >
            <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-blue-500/30 to-cyan-600/30 group-hover:from-blue-400/60 group-hover:via-blue-500/60 group-hover:to-cyan-600/60 transition-all duration-500 animate-pulse"></div>
              
              {/* Card content */}
              <div className="relative bg-black/60 backdrop-blur-sm p-4 rounded-xl h-full flex flex-col">
                <div className={`${orbitron.className} flex items-center mb-2`}>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold mr-3">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
                    {steps[1].title}
                  </h3>
                </div>
                <p className="text-blue-100/70 text-xs">
                  {steps[1].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Central Image with surrounding cards in 5 positions - Desktop layout */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative max-w-5xl mx-auto">
            
            {/* Card 1 - Top Left - HIDDEN ON MOBILE */}
            <div className="w-full hidden lg:block">
              <motion.div 
                className="group"
                style={{ 
                  scale: card1Scale,
                  opacity: card1Opacity
                }}
              >
                <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-purple-500/30 to-purple-600/30 group-hover:from-purple-400/60 group-hover:via-purple-500/60 group-hover:to-purple-600/60 transition-all duration-500 animate-pulse"></div>
                  
                  {/* Card content */}
                  <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col">
                    <div className={`${orbitron.className} flex items-center mb-3`}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold mr-3">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">
                        {steps[0].title}
                      </h3>
                    </div>
                    <p className="text-purple-100/70 text-sm">
                      {steps[0].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Central Column with Image */}
            <div className="w-full flex flex-col items-center mb-8 lg:mb-0">
              {/* Empty space at top on desktop */}
              <div className="h-4 lg:h-8"></div>
              
              {/* Central Image */}
              <div ref={centralImageRef} className="w-full flex justify-center items-center">
                <motion.div
                  className="relative w-full max-w-[240px] lg:max-w-[320px] mx-auto transform-gpu"
                  style={{
                    scale: imageScale,
                    opacity: imageOpacity
                  }}
                >
                  <div className="aspect-square relative">
                    {/* Glowing circles behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-amber-500/20 filter blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 rounded-full bg-amber-500/30 filter blur-2xl animate-pulse" style={{ animationDelay: "300ms" }}></div>
                    
                    {/* Central coin image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-4/5 h-4/5">
                        <Image
                          src="/images/coinimage.png"
                          alt="AZT Coin"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Rotating border */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/40 animate-spin-slow"></div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Card 2 - Top Right - HIDDEN ON MOBILE */}
            <div className="w-full hidden lg:block">
              <motion.div 
                className="group"
                style={{ 
                  scale: card2Scale,
                  opacity: card2Opacity
                }}
              >
                <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-blue-500/30 to-cyan-600/30 group-hover:from-blue-400/60 group-hover:via-blue-500/60 group-hover:to-cyan-600/60 transition-all duration-500 animate-pulse"></div>
                  
                  {/* Card content */}
                  <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col">
                    <div className={`${orbitron.className} flex items-center mb-3`}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold mr-3">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
                        {steps[1].title}
                      </h3>
                    </div>
                    <p className="text-blue-100/70 text-sm">
                      {steps[1].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Middle row: Card 3 (bottom-left) | Empty | Card 4 (bottom-right) */}
            {/* Card 3 - Bottom Left */}
            <div className="w-full  lg:mb-0 lg:mt-0">
              <motion.div 
                className="group max-w-[85%] mx-auto lg:max-w-full transform-gpu"
                style={{ 
                  scale: card3Scale,
                  opacity: card3Opacity
                }}
              >
                <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-emerald-500/30 to-green-600/30 group-hover:from-emerald-400/60 group-hover:via-emerald-500/60 group-hover:to-green-600/60 transition-all duration-500 animate-pulse"></div>
                  
                  {/* Card content */}
                  <div className="relative bg-black/60 backdrop-blur-sm p-4 lg:p-6 rounded-xl h-full flex flex-col">
                    <div className={`${orbitron.className} flex items-center mb-2 lg:mb-3`}>
                      <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-sm font-bold mr-3">
                        3
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">
                        {steps[2].title}
                      </h3>
                    </div>
                    <p className="text-emerald-100/70 text-xs lg:text-sm">
                      {steps[2].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Empty center in middle row - for proper spacing */}
            <div className="hidden lg:block"></div>
            
            {/* Card 4 - Bottom Right */}
            <div className="w-full  lg:mb-0 lg:mt-0">
              <motion.div 
                className="group max-w-[85%] mx-auto lg:max-w-full transform-gpu"
                style={{ 
                  scale: card4Scale,
                  opacity: card4Opacity
                }}
              >
                <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-amber-500/30 to-yellow-600/30 group-hover:from-amber-400/60 group-hover:via-amber-500/60 group-hover:to-yellow-600/60 transition-all duration-500 animate-pulse"></div>
                  
                  {/* Card content */}
                  <div className="relative bg-black/60 backdrop-blur-sm p-4 lg:p-6 rounded-xl h-full flex flex-col">
                    <div className={`${orbitron.className} flex items-center mb-2 lg:mb-3`}>
                      <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white text-sm font-bold mr-3">
                        4
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                        {steps[3].title}
                      </h3>
                    </div>
                    <p className="text-amber-100/70 text-xs lg:text-sm">
                      {steps[3].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Bottom row for Card 5 centered */}
            <div className="col-span-1 lg:col-span-3  lg:mb-0 lg:mt-2">
              <div className="w-full flex justify-center">
                {/* Card 5 - Below Image and centered */}
                <motion.div 
                  className="group max-w-[85%] mx-auto lg:max-w-sm transform-gpu"
                  style={{ 
                    scale: card5Scale,
                    opacity: card5Opacity
                  }}
                >
                  <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 via-red-500/30 to-orange-600/30 group-hover:from-red-400/60 group-hover:via-red-500/60 group-hover:to-orange-600/60 transition-all duration-500 animate-pulse"></div>
                    
                    {/* Card content */}
                    <div className="relative bg-black/60 backdrop-blur-sm p-4 lg:p-6 rounded-xl h-full flex flex-col">
                      <div className={`${orbitron.className} flex items-center mb-2 lg:mb-3 justify-center`}>
                        <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold mr-3">
                          5
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-400">
                          {steps[4].title}
                        </h3>
                      </div>
                      <p className="text-red-100/70 text-xs lg:text-sm text-center">
                        {steps[4].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div ref={ctaRef} className="text-center pt-8 md:pt-12 pb-12 md:pb-16 px-4">
          <motion.div
            className="max-w-full md:max-w-2xl mx-auto"
            style={{ 
              scale: ctaScale,
              opacity: ctaOpacity,
              transformOrigin: "center"
            }}
          >
            <p className={`${playfair.className} text-lg md:text-xl text-amber-100/80 italic mb-4 md:mb-6`}>
              Join the exclusive community of $AZT holders today
            </p>
            <a 
              href="#" 
              className={`${orbitron.className} inline-block py-3 px-6 md:py-4 md:px-8 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold rounded-full uppercase tracking-wider hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 text-sm md:text-base`}
            >
              Buy $AZT Now
            </a>
            <div className="mt-6 text-center">
              <div className="overflow-hidden max-w-full mx-auto">
                <p className="text-amber-300/90 font-mono text-xs md:text-sm px-3 py-2 md:px-4 md:py-2 bg-black/30 rounded-lg inline-block border border-amber-500/20 max-w-full truncate md:overflow-visible md:whitespace-normal relative">
                  <span className="hidden md:inline">G7BFnuGmwF43STzvzkttMzkCGsqYviHTCTvXtguTFjEG</span>
                  <span className="inline md:hidden">G7BFnu...TFjEG</span>
                  <button 
                    className="ml-2 text-amber-400 hover:text-amber-300 focus:outline-none"
                    onClick={copyToClipboard}
                    aria-label="Copy address to clipboard"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                  {copied && (
                    <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black/80 text-amber-300 text-xs px-2 py-1 rounded-md">
                      Copied!
                    </span>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
} 