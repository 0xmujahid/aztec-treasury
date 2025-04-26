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
      title: "Total Supply",
      description: "15,000,000 $AZT Limited supply for scarcity and value.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      title: "LP Tokens Burnt",
      description: "Liquidity pool tokens burnt for security.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "No presale, No Taxes",
      description: "No hidden fees Zero taxes on transactions—transparent and fair.",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 4,
      title: "Contract Renounced",
      description: "Community-driven with renounced ownership.",
      color: "from-amber-500 to-yellow-600"
    },
    {
      id: 5,
      title: "Solana-Based",
      description: "Fast, low-cost transactions.",
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
    <section ref={sectionRef} className="bg-black text-white overflow-hidden relative py-20" id="tokenomics">
      {/* Remove background gradient effect and use solid black */}
      
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
              {/* Stylish border */}
              <div className="absolute inset-0 rounded-xl border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-500"></div>
              
              {/* Card content - fully transparent with stylish elements */}
              <div className="relative backdrop-blur-sm p-4 rounded-xl h-full flex flex-col">
                <div className={`${orbitron.className} flex items-center mb-2`}>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold mr-3 shadow-lg shadow-purple-500/20">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-white drop-shadow-md">
                    {steps[0].title}
                  </h3>
                </div>
                <p className="text-amber-100/90 text-xs pl-10 border-l border-purple-500/20">
                  {steps[0].description}
                </p>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500/60 rounded-tl-md"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500/60 rounded-tr-md"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500/60 rounded-bl-md"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500/60 rounded-br-md"></div>
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
              {/* Stylish border */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-500"></div>
              
              {/* Card content - fully transparent */}
              <div className="relative backdrop-blur-sm p-4 rounded-xl h-full flex flex-col">
                <div className={`${orbitron.className} flex items-center mb-2`}>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold mr-3 shadow-lg shadow-blue-500/20">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-white drop-shadow-md">
                    {steps[1].title}
                  </h3>
                </div>
                <p className="text-amber-100/90 text-xs pl-10 border-l border-blue-500/20">
                  {steps[1].description}
                </p>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500/60 rounded-tl-md"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500/60 rounded-tr-md"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/60 rounded-bl-md"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/60 rounded-br-md"></div>
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
                  {/* Stylish border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-500"></div>
                  
                  {/* Card content - fully transparent */}
                  <div className="relative backdrop-blur-sm p-6 rounded-xl h-full flex flex-col">
                    <div className={`${orbitron.className} flex items-center mb-3`}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold mr-3 shadow-lg shadow-purple-500/20">
                        1
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-md">
                        {steps[0].title}
                      </h3>
                    </div>
                    <p className="text-amber-100/90 text-sm pl-11 border-l border-purple-500/20">
                      {steps[0].description}
                    </p>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500/60 rounded-tl-md"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500/60 rounded-tr-md"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/60 rounded-bl-md"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500/60 rounded-br-md"></div>
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
                  
                    
                    {/* Central coin image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-4/5 h-4/5">
                <Image
                          src="/images/tokennomics2.png"
                          alt="AZT Coin"
                          fill
                          priority
                          className="object-contain relative z-10"
                        />
                        
                        {/* Edge shadow effect - only on edges */}
                        <div className="absolute inset-0 z-20 pointer-events-none" style={{
                          background: 'transparent',
                          boxShadow: 'none',
                          borderImage: 'linear-gradient(to right, rgba(0,0,0,0.9), transparent 40%, transparent 60%, rgba(0,0,0,0.9)) 1'
                        }}>
                          {/* Left shadow */}
                          <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-gradient-to-r from-black to-transparent opacity-100"></div>
                          
                          {/* Right shadow */}
                          <div className="absolute right-0 top-0 bottom-0 w-[40px] bg-gradient-to-l from-black to-transparent opacity-100"></div>
                          
                          {/* Top shadow */}
                          <div className="absolute top-0 left-0 right-0 h-[40px] bg-gradient-to-b from-black to-transparent opacity-100"></div>
                          
                          {/* Bottom shadow */}
                          <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-black to-transparent opacity-100"></div>
                        </div>
                        
                        {/* Remove the vignette effect that was darkening the whole image */}
                      </div>
                    </div>
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
                  {/* Stylish border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-500"></div>
                  
                  {/* Card content - fully transparent */}
                  <div className="relative backdrop-blur-sm p-6 rounded-xl h-full flex flex-col">
                    <div className={`${orbitron.className} flex items-center mb-3`}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-sm font-bold mr-3 shadow-lg shadow-blue-500/20">
                        2
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-md">
                        {steps[1].title}
                      </h3>
                    </div>
                    <p className="text-amber-100/90 text-sm pl-11 border-l border-blue-500/20">
                      {steps[1].description}
                    </p>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500/60 rounded-tl-md"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500/60 rounded-tr-md"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500/60 rounded-bl-md"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500/60 rounded-br-md"></div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Middle row: Card 3 (bottom-left) | Empty | Card 4 (bottom-right) */}
            {/* Card 3 - Bottom Left */}
            <div className="w-full lg:mb-0 lg:mt-0">
              <motion.div 
                className="group max-w-[85%] mx-auto lg:max-w-full transform-gpu"
                style={{ 
                  scale: card3Scale,
                  opacity: card3Opacity
                }}
              >
                <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
                  {/* Stylish border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-emerald-500/30 group-hover:border-emerald-500/60 transition-all duration-500"></div>
                  
                  {/* Card content - fully transparent */}
                  <div className="relative backdrop-blur-sm p-4 lg:p-6 rounded-xl h-full flex flex-col">
                    <div className={`${orbitron.className} flex items-center mb-2 lg:mb-3`}>
                      <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-sm font-bold mr-3 shadow-lg shadow-emerald-500/20">
                        3
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-white drop-shadow-md">
                        {steps[2].title}
                      </h3>
                    </div>
                    <p className="text-amber-100/90 text-xs lg:text-sm pl-10 lg:pl-11 border-l border-emerald-500/20">
                      {steps[2].description}
                    </p>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-t-2 border-l-2 border-emerald-500/60 rounded-tl-md"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-t-2 border-r-2 border-emerald-500/60 rounded-tr-md"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-b-2 border-l-2 border-emerald-500/60 rounded-bl-md"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-b-2 border-r-2 border-emerald-500/60 rounded-br-md"></div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Empty center in middle row - for proper spacing */}
            <div className="hidden lg:block"></div>
            
            {/* Card 4 - Bottom Right */}
            <div className="w-full lg:mb-0 lg:mt-0">
              <motion.div 
                className="group max-w-[85%] mx-auto lg:max-w-full transform-gpu"
                style={{ 
                  scale: card4Scale,
                  opacity: card4Opacity
                }}
              >
                <div className="relative overflow-hidden rounded-xl p-[1px] h-full">
                  {/* Stylish border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-amber-500/30 group-hover:border-amber-500/60 transition-all duration-500"></div>
                  
                  {/* Card content - fully transparent */}
                  <div className="relative backdrop-blur-sm p-4 lg:p-6 rounded-xl h-full flex flex-col">
                    <div className={`${orbitron.className} flex items-center mb-2 lg:mb-3`}>
                      <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white text-sm font-bold mr-3 shadow-lg shadow-amber-500/20">
                        4
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-white drop-shadow-md">
                        {steps[3].title}
                      </h3>
                    </div>
                    <p className="text-amber-100/90 text-xs lg:text-sm pl-10 lg:pl-11 border-l border-amber-500/20">
                      {steps[3].description}
                    </p>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-t-2 border-l-2 border-amber-500/60 rounded-tl-md"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-t-2 border-r-2 border-amber-500/60 rounded-tr-md"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-b-2 border-l-2 border-amber-500/60 rounded-bl-md"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-b-2 border-r-2 border-amber-500/60 rounded-br-md"></div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Bottom row for Card 5 centered */}
            <div className="col-span-1 lg:col-span-3 lg:mb-0 lg:mt-2">
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
                    {/* Stylish border */}
                    <div className="absolute inset-0 rounded-xl border-2 border-red-500/30 group-hover:border-red-500/60 transition-all duration-500"></div>
                    
                    {/* Card content - fully transparent */}
                    <div className="relative backdrop-blur-sm p-4 lg:p-6 rounded-xl h-full flex flex-col">
                      <div className={`${orbitron.className} flex items-center mb-2 lg:mb-3 justify-center`}>
                        <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold mr-3 shadow-lg shadow-red-500/20">
                          5
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-white drop-shadow-md">
                          {steps[4].title}
                        </h3>
                      </div>
                      <p className="text-amber-100/90 text-xs lg:text-sm text-center border-b border-red-500/20 pb-2">
                        {steps[4].description}
                      </p>
                      
                      {/* Decorative corner elements */}
                      <div className="absolute top-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-t-2 border-l-2 border-red-500/60 rounded-tl-md"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-t-2 border-r-2 border-red-500/60 rounded-tr-md"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-b-2 border-l-2 border-red-500/60 rounded-bl-md"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-b-2 border-r-2 border-red-500/60 rounded-br-md"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom CTA */}
       
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