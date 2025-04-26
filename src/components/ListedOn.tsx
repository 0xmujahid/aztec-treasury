"use client";

import React, { useRef, useState, useEffect } from 'react';
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

export default function ListedOn() {
  // State for mobile detection
  const [isMobile, setIsMobile] = useState(false);
  
  // Section reference for animations
  const sectionRef = useRef(null);
  
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
  
  // Get scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create scale and opacity effects for title and exchanges
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  // Create slide-in effects for exchanges with staggered timing
  const exchange1X = useTransform(scrollYProgress, [0.1, 0.4], [isMobile ? -20 : -100, 0]);
  const exchange2X = useTransform(scrollYProgress, [0.15, 0.45], [isMobile ? 20 : 100, 0]);
  
  // Create opacity effects for exchanges
  const exchange1Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const exchange2Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  
  // Coming soon section effects
  const comingSoonY = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);
  const comingSoonOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const comingSoonScale = useTransform(scrollYProgress, [0.4, 0.7], [0.9, 1]);
  
  const exchanges = [
    {
      name: "Jup.ag",
      logo: "/images/jupiter-ag-jup-logo.png", // Using Aztec logo as placeholder (would need proper Jup.ag logo)
      url: "https://jup.ag",
      description: "Jupiter Aggregator - Best price swaps on Solana"
    },
    {
      name: "Radium.io",
      logo: "/images/raydium-ray-logo.png", // Using Aztec logo as placeholder (would need proper Raydium logo)
      url: "https://raydium.io",
      description: "Leading AMM and DeFi protocol on Solana"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-black text-white overflow-hidden relative" 
      id="listedOn"
    >
     
      <div className="container mx-auto px-4">
        {/* Title with stylish font and animation */}
        <motion.div
          className={`${cinzel.className} text-center mb-16 md:mb-20 relative`}
          style={{
            scale: titleScale,
            opacity: titleOpacity
          }}
        >
          {/* Decorative element - thin line with diamond */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-12 w-[1px] h-10 bg-gradient-to-b from-transparent to-amber-500/50"></div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 w-3 h-3 bg-amber-500/30 rotate-45 border border-amber-500/50"></div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-600 pb-2 inline-block">
            Listed On
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto opacity-60 mt-4"></div>
          <p className={`${playfair.className} text-lg md:text-xl text-amber-100/80 italic mt-6 max-w-3xl mx-auto`}>
            Trade Aztec Coin on these trusted exchanges
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Exchanges list with animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
            {/* First exchange with left slide-in animation */}
            <motion.div
              style={{ 
                x: exchange1X,
                opacity: exchange1Opacity
              }}
              className="transform-gpu"
            >
              <a 
                href={exchanges[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl p-[1px] h-full block"
              >
                {/* Enhanced animated golden border with shimmer effect */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 opacity-50 group-hover:opacity-80">
                    <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-amber-400 animate-shimmer"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-amber-400 to-transparent animate-shimmer-reverse"></div>
                    <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-amber-400 to-transparent animate-shimmer-vertical"></div>
                    <div className="absolute bottom-0 right-0 w-[1px] h-1/2 bg-gradient-to-b from-transparent to-amber-400 animate-shimmer-vertical-reverse"></div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="relative bg-black/60 backdrop-blur-sm p-6 md:p-8 rounded-xl h-full flex flex-col items-center z-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-6 relative">
                    <Image 
                      src={exchanges[0].logo} 
                      alt={`${exchanges[0].name} logo`} 
                      width={100} 
                      height={100}
                      className="rounded-lg object-contain relative z-10"
                    />
                  </div>
                  <h3 className={`${orbitron.className} text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-3`}>
                    {exchanges[0].name}
                  </h3>
                  <p className="text-amber-100/70 text-center mb-6">
                    {exchanges[0].description}
                  </p>
                  <span className={`${orbitron.className} bg-black text-amber-400 py-2 px-6 rounded-full text-sm font-medium border border-amber-500/30 group-hover:border-amber-500/80 transition-all duration-300`}>
                    Trade $AZT Now
                  </span>
                </div>
              </a>
            </motion.div>
            
            {/* Second exchange with right slide-in animation */}
            <motion.div
              style={{ 
                x: exchange2X,
                opacity: exchange2Opacity
              }}
              className="transform-gpu"
            >
              <a 
                href={exchanges[1].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl p-[1px] h-full block"
              >
                {/* Enhanced animated golden border with shimmer effect */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 opacity-50 group-hover:opacity-80">
                    <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-amber-400 animate-shimmer"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-amber-400 to-transparent animate-shimmer-reverse"></div>
                    <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-amber-400 to-transparent animate-shimmer-vertical"></div>
                    <div className="absolute bottom-0 right-0 w-[1px] h-1/2 bg-gradient-to-b from-transparent to-amber-400 animate-shimmer-vertical-reverse"></div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="relative bg-black/60 backdrop-blur-sm p-6 md:p-8 rounded-xl h-full flex flex-col items-center z-10">
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-6 relative">
                    <Image 
                      src={exchanges[1].logo} 
                      alt={`${exchanges[1].name} logo`} 
                      width={100} 
                      height={100}
                      className="rounded-lg object-contain relative z-10"
                    />
                  </div>
                  <h3 className={`${orbitron.className} text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-3`}>
                    {exchanges[1].name}
                  </h3>
                  <p className="text-amber-100/70 text-center mb-6">
                    {exchanges[1].description}
                  </p>
                  <span className={`${orbitron.className} bg-black text-amber-400 py-2 px-6 rounded-full text-sm font-medium border border-amber-500/30 group-hover:border-amber-500/80 transition-all duration-300`}>
                    Trade $AZT Now
                  </span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Upcoming exchanges with slide-up animation */}
          <motion.div 
            className="mt-8 text-center transform-gpu"
            style={{ 
              y: comingSoonY,
              opacity: comingSoonOpacity,
              scale: comingSoonScale
            }}
          >
            <div className="relative overflow-hidden rounded-xl p-[1px]">
              {/* Enhanced animated golden border with shimmer effect */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-shimmer-reverse"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-shimmer-vertical"></div>
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-shimmer-vertical-reverse"></div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="relative bg-black/60 backdrop-blur-sm p-8 rounded-xl z-10">
                <h3 className={`${orbitron.className} text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-amber-300 to-yellow-400`}>
                  Coming Soon
                </h3>
                <p className={`${playfair.className} text-lg text-amber-100/80 mb-6 max-w-3xl mx-auto italic`}>
                  Stay tuned as we expand our presence and bring Aztec Coin to more platforms and exchanges in the near future. The quest is just getting started!
                </p>
                
                <div className="flex justify-center space-x-3">
                  <div className="w-3 h-3 bg-amber-500/50 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-amber-500/50 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-3 h-3 bg-amber-500/50 rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes shimmer-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes shimmer-vertical-reverse {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }
        .animate-shimmer-reverse {
          animation: shimmer-reverse 4s linear infinite;
        }
        .animate-shimmer-vertical {
          animation: shimmer-vertical 4s linear infinite;
        }
        .animate-shimmer-vertical-reverse {
          animation: shimmer-vertical-reverse 4s linear infinite;
        }
      `}</style>
    </section>
  );
} 