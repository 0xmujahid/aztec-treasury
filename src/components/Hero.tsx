"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, Variants, useAnimation } from "framer-motion";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [hasImageLoaded, setHasImageLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
    
      if (currentScroll > 5 && !hasScrolled) {  // Only set true if real scroll
        setHasScrolled(true);
      }
    
      if (currentScroll > 100 && !hasImageLoaded) {
        setHasImageLoaded(true);
        controls.start("visible");
      }
      
      // Make image disappear when scrolling back to top
      if (currentScroll < 50 && hasImageLoaded) {
        setHasImageLoaded(false);
        controls.start("hidden");
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Backup timer for mobile only - longer delay to ensure scroll happens first
    const timer = setTimeout(() => {
      // Only if user hasn't scrolled after 2 seconds, show the image
      if (!hasImageLoaded && window.innerWidth < 768) {
        setHasImageLoaded(true);
        controls.start("visible");
      }
    }, 2000);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [hasImageLoaded, controls, hasScrolled]);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Match lg breakpoint
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only apply text animation on desktop
  const textLeftAnimation = isMobile ? 0 : Math.min(scrollY / 5, 250);

  const meltingVariants: Variants = {
    initial: { 
      y: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    animate: (i: number) => ({
      y: [0, -5, 5, -3, 3, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        delay: i * 0.1
      }
    })
  };

  const text = "The Hidden Treasure of Cryptocurrency";
  const words = text.split(" ");

  // Image animation variants
  const imageVariants: Variants = {
    hidden: { 
      y: 400,
      opacity: 0,
      x: 0
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 8,
        damping: 7,
        duration: 3,
        delay: 0.6
      }
    }
  };

  // Keep text in the same initial position regardless of scroll state
  const initialTextX = 150; // Start with a fixed offset to the right
  
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden pt-48 ">
      {/* Content */}
      <div className="container-fluid mx-auto pt-16 md:pt-24 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between relative">
          
          {/* Create a fixed container for text positioning */}
          <div className="w-full lg:w-1/2 px-4 lg:px-8 text-center lg:text-left relative z-10 order-1 lg:order-1 mt-0 mb-8 lg:mb-0 overflow-visible">
            {/* Text container with right padding to ensure content remains visible when moving left */}
            <motion.div 
              className="relative z-10 lg:pr-24"
              style={{ 
                transform: isMobile ? 'translateX(0)' : `translateX(${initialTextX - textLeftAnimation}px)`,
                transition: 'transform 0.1s linear'
              }}
            >
              {/* Text background to ensure visibility */}
              <div className="absolute inset-0 bg-[#0A0A0A]/70 backdrop-blur-sm -z-10 rounded-xl"></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-sm">
                {words.map((word, wordIndex) => (
                  <motion.span 
                    key={`word-${wordIndex}`}
                    className={`inline-block mr-2 ${wordIndex === 1 ? "text-primary block" : ""}`}
                    initial="initial"
                    animate="animate"
                    custom={wordIndex}
                    variants={{
                      initial: { opacity: 1 },
                      animate: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={`char-${wordIndex}-${charIndex}`}
                        className="inline-block"
                        variants={meltingVariants}
                        custom={charIndex}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 font-light text-shadow-sm mx-auto lg:mx-0" style={{ maxWidth: "90%", margin: isMobile ? "0 auto" : "0" }}>
                With a total supply of only 15 million coins, Aztec Coin is one of the lowest supply crypto in existence, even lower than Bitcoin.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <button className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg shadow-lg active:shadow-inner relative overflow-hidden mx-auto lg:mx-0">
                  Buy AZTEC Now
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Image container - Fixed centered positioning */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-2 mb-6 lg:mb-0">
            <motion.div 
              className="w-full max-w-[680px] flex justify-center items-center"
              initial="hidden"
              animate={hasImageLoaded ? "visible" : "hidden"}
              variants={imageVariants}
            >
              <div className="relative w-full max-w-[680px] overflow-hidden rounded-xl">
                {/* Shadow effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_50px_rgba(10,10,10,0.95)] z-20 pointer-events-none"></div>
                
                {/* Image */}
                <Image
                  src="/images/dynamic-data-visualization-3d.jpg"
                  alt="Aztec Token"
                  width={680}
                  height={510}
                  priority
                  className="w-full h-auto max-h-[510px] z-10"
                  style={{ 
                    filter: 'brightness(1.3) contrast(1.2) saturate(1.1)'
                  }}
                />
                
                {/* Edge gradient overlays */}
                <div className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 10%, rgba(10,10,10,0) 30%),
                      linear-gradient(to left, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 10%, rgba(10,10,10,0) 30%),
                      linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 10%, rgba(10,10,10,0) 30%),
                      linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 10%, rgba(10,10,10,0) 30%)
                    `
                  }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}