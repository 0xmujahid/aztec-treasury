"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cinzel, Playfair_Display } from 'next/font/google';

// Load custom fonts
const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export default function About() {
  // State for window width
  const [isMobile, setIsMobile] = useState(false);
  
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

  // Main section animations
  const [textRef, textInView] = useInView({
    triggerOnce: false,
    threshold: 0.25,
    rootMargin: "-100px 0px"
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: false,
    threshold: 0.25,
    rootMargin: "-100px 0px"
  });

  // Card data
  const cards = [
    {
      id: 1,
      image: "/images/card1.webp",
      title: "Limited Quantity, Maximum Value",
      description: "Only 15 million $AZT coins exist, creating true digital scarcity in a market of abundance."
    },
    {
      id: 2,
      image: "/images/card2.webp",
      title: "$AZT – The Coin of Legends",
      description: "Built for Kings & Crypto Warriors seeking long-term wealth preservation and growth."
    },
    {
      id: 3,
      image: "/images/card3.webp",
      title: "Community-Driven Power",
      description: "Join a movement of forward-thinkers who understand the true value of digital scarcity."
    }
  ];

  // Reference for cards container
  const cardsRef = useRef(null);
  
  // Get scroll progress relative to cards container
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to Y value (movement range)
  const y = useTransform(scrollYProgress, [0, 1], [400, -200]);
  
  // Reference for scaling text container
  const scalingTextRef = useRef(null);
  
  // Separate scroll tracking for the scaling text
  const { scrollYProgress: textScrollProgress } = useScroll({
    target: scalingTextRef,
    offset: ["start end", "end start"]
  });
  
  // Create more mobile-friendly scale effect for text
  const textScaleX = useTransform(
    textScrollProgress, 
    [0, 0.5], 
    [isMobile ? 0.9 : 0.85, 1.0]
  );
  const textOpacity = useTransform(textScrollProgress, [0, 0.3], [0, 1]);

  // Reference for rotation image and text section
  const rotationSectionRef = useRef(null);
  
  // Scroll tracking for rotation section
  const { scrollYProgress: rotationScrollProgress } = useScroll({
    target: rotationSectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create image rotation and position effects
  const imageRotate = useTransform(rotationScrollProgress, [0, 0.6], [-30, 10]);
  const imageX = useTransform(rotationScrollProgress, [0, 0.5], [-300, 0]);
  const imageOpacity = useTransform(rotationScrollProgress, [0, 0.3], [0, 1]);
  
  // Create text slide-in from right effect
  const textX = useTransform(rotationScrollProgress, [0.1, 0.6], [300, 0]);
  const textOpacity2 = useTransform(rotationScrollProgress, [0.1, 0.4], [0, 1]);

  return (
    <section className="bg-[#0A0A0A] text-white overflow-hidden relative" id="vision">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left side - Text content with upward animation */}
          <motion.div 
            ref={textRef}
            className="w-full lg:w-1/2 px-4 lg:pr-8 order-1 flex items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: textInView ? 1 : 0, 
              y: textInView ? 0 : 100 
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="lg:max-w-[500px] lg:ml-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary text-center lg:text-left">Our Vision</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-0 text-center lg:text-left">
                To build a community of forward-thinkers who value scarcity and long-term growth. By embracing Aztec Coin, you're not just investing in a cryptocurrency — you're embarking on a journey to uncover wealth through the power of limited supply.
              </p>
            </div>
          </motion.div>
          
          {/* Right side - Image with right-to-left animation */}
          <motion.div 
            ref={imageRef}
            className="w-full lg:w-1/2 flex justify-end order-2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 200 }}
            animate={{ 
              opacity: imageInView ? 1 : 0, 
              x: imageInView ? 0 : 200 
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[680px] mr-0 overflow-hidden rounded-xl">
              {/* Shadow effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_50px_rgba(10,10,10,0.95)] z-20 pointer-events-none"></div>
              
              {/* Image */}
              <Image
                src="/images/about.jpg"
                alt="Aztec Coin - Long Term Growth Vision"
                width={680}
                height={510}
                priority
                className="w-full h-auto max-h-[510px] z-10"
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
        
        {/* Cards section */}
        <div 
          ref={cardsRef}
          className="px-4 sm:px-8 lg:px-16 mb-20 relative"
        >
          {/* Centered container with max width for cards */}
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
              style={{ y }}
            >
              {cards.map((card) => (
                <div key={card.id} className="flex justify-center">
                  {/* Card with golden glow effect and gradient border */}
                  <div 
                    className="relative rounded-2xl h-[260px] w-full max-w-[260px] flex flex-col group"
                    style={{
                      background: "linear-gradient(145deg, #121214 0%, #0A0A0F 100%)",
                      boxShadow: "0 10px 30px rgba(250, 203, 5, 0.15)"
                    }}
                  >
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 opacity-50 group-hover:opacity-80 transition-opacity duration-300" style={{ zIndex: 1 }}>
                      <div className="h-full w-full rounded-2xl bg-black"></div>
                    </div>
                    
                    {/* Container for the image with positioning */}
                    <div className="relative w-full h-[120px] overflow-visible" style={{ zIndex: 2 }}>
                      {/* Image with centered positioning and glow effect */}
                      <div 
                        className="absolute w-[130px] h-[130px] top-[-30px] left-1/2 transform -translate-x-1/2 z-10 group-hover:scale-105 transition-transform duration-300"
                        style={{ 
                          filter: "drop-shadow(0 0 12px rgba(250, 203, 5, 0.2))",
                        }}
                      >
        <Image 
                          src={card.image}
                          alt={card.title}
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      
                      {/* Background glow effect */}
                      <div 
                        className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300" 
                        style={{ background: "radial-gradient(circle, rgba(250, 203, 5, 1) 0%, rgba(250, 203, 5, 0) 70%)" }}
                      ></div>
                      
                      {/* Dark vignette effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-5 pointer-events-none"></div>
                    </div>
                    
                    {/* Text section at bottom with gradient highlight */}
                    <div className="flex-1 flex flex-col justify-center items-center p-3 rounded-b-2xl relative z-5">
                      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 text-center group-hover:from-yellow-300 group-hover:to-amber-400 transition-all duration-300">
                        {card.title}
                      </h3>
                      
                      {/* Optional decorative elements */}
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>
                    </div>
                    
                    {/* Hover animation effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-amber-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ zIndex: 0 }}></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scaling Text Section */}
        <div 
          ref={scalingTextRef}
          className="py-12 px-4 sm:px-8 min-h-[300px] flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(250,203,5,0.02) 0%, rgba(250,203,5,0.08) 50%, rgba(250,203,5,0.02) 100%)"
          }}
        >
          <motion.div 
            className="max-w-4xl text-center"
            style={{ 
              scale: textScaleX,
              opacity: textOpacity,
              transformOrigin: "center"
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight leading-tight px-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                $AZT Coin
              </span>
              {" "}is here to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">
                conquer
              </span>
              {" "}the crypto world.
            </h2>
            
            <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed px-2">
              $AZT Coin is here to claim its rightful place as the true ruler of the 
              meme coin empire. Hold long-term, unlock treasures, and watch your riches grow.
            </p>
            
            {/* Decorative elements */}
            <div className="mt-6 md:mt-10 w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto opacity-60"></div>
          </motion.div>
        </div>
        
        {/* Rotating Image and Sliding Text Section */}
        <div 
          ref={rotationSectionRef}
          className="py-24 px-4 sm:px-8 overflow-hidden relative"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left side - Image with rotation and slide from left */}
              <motion.div 
                className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                style={{ 
                  x: imageX,
                  rotate: imageRotate,
                  opacity: imageOpacity,
                }}
              >
                {/* Simple full-size image with no styling */}
                <div className="w-full max-w-[600px]">
                  <Image
                    src="/images/coinimage.png"
                    alt="Aztec Coin"
                    width={1600}
                    height={1600}
                    priority
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
              
              {/* Right side - Text sliding from right */}
              <motion.div 
                className="w-full lg:w-1/2 px-4"
                style={{ 
                  x: textX,
                  opacity: textOpacity2
                }}
              >
                <div className="lg:max-w-[550px]">
                  <div className={`${cinzel.className} mb-8`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-400 text-center mb-4">
                      The Treasure Awaits, For Those Who Dare to Hold
                    </h3>
                    <p className={`${playfair.className} text-xl md:text-2xl leading-relaxed text-center text-amber-100/80 italic`}>
                      The path to untold fortunes and hidden wealth, <br></br>
                      waiting for the true seekers to discover.
                    </p>
                  </div>
                  
                  {/* Feature points with gold icons */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 justify-center">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-400 text-center transform hover:scale-105 transition-transform duration-300" style={{ textShadow: '0 0 15px rgba(250,203,5,0.5)' }}>
                        ARE YOU READY?
                      </h1>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 