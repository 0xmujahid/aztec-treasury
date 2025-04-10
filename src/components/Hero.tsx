"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from "framer-motion";

export default function Hero() {
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

  // Calculate the transition effect based on scroll
  const transitionStrength = Math.min(scrollY / 500, 1);

  // Type-safe animation variants
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
  return (
    <section className="relative min-h-screen bg-dark text-white overflow-hidden pt-20 pb-24 section-boundary section-boundary-bottom">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/70 to-dark"></div>
      
      {/* Background image with bottom shadow */}
      <div className="absolute inset-0 opacity-70 z-0">
        {/* Shadow container */}
        <div className="relative w-full h-full after:absolute after:inset-x-0 after:bottom-0 after:h-8 after:bg-gradient-to-t after:from-black/20 after:to-transparent after:pointer-events-none">
          <Image 
            src="/images/header.jpg" 
            alt="Aztec Treasury Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Visual section divider - always visible */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Gold accent line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
        {/* Soft glow effect */}
        <div className="w-full h-[8px] bg-gradient-to-b from-primary/30 to-transparent"></div>
      </div>

      {/* Transition gradient to next section - gets stronger as user scrolls */}
      <div 
        className="section-transition-bottom transition-opacity duration-300"
        style={{ opacity: transitionStrength }}
      ></div>

      {/* Section label */}
     

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center">
      {words.map((word, wordIndex) => (
        <motion.span 
          key={`word-${wordIndex}`}
          className="inline-block mr-2"
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
              className={`inline-block ${wordIndex === 1 ? "text-primary" : ""}`}
              variants={meltingVariants}
              custom={charIndex}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </h1>
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-xl md:text-2xl mb-6 font-light">
          With a total supply of only 15 million coins, Aztec Coin is one of the lowest supply crypto in existence, even lower than Bitcoin.           </h2>

          <div className="relative">
            {/* Shadow beneath coin */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-primary/30 rounded-full blur-md coin-shadow"></div>
            
            {/* Coin container with perspective for 3D effect */}
            <div className="coin-container h-64 w-64 mx-auto my-8 perspective-1000">
              {/* Coin wrapper - this rotates */}
              <div className="coin-wrapper relative h-full w-full preserve-3d">
                {/* Front of coin */}
                <div className="absolute inset-0 backface-hidden coin-face">
                  <Image 
                    src="/images/New Logo for Aztec.png" 
                    alt="Aztec Token Front"
                    width={256}
                    height={256}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Back of coin */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 coin-face">
                  <Image 
                    src="/images/New Logo for Aztec.png" 
                    alt="Aztec Token Back"
                    width={256}
                    height={256}
                    className="w-full h-full"
                    style={{ transform: 'scaleX(-1)' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <button
              className="
                bg-primary hover:bg-secondary 
                text-dark font-bold py-3 px-8 
                rounded-full transition-all 
                duration-300 transform 
                hover:scale-105 active:scale-95
                text-lg shadow-lg
                active:shadow-inner
                relative overflow-hidden
              "
            >
              Buy AZTEC Now
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 