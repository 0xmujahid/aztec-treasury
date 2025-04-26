"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cinzel, Playfair_Display ,Orbitron, Rubik} from 'next/font/google';

// Load custom fonts
const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['500']
});

const rubik = Rubik({ 
  subsets: ['latin'],
  weight: ['700']
});

export default function About() {
  // State for window width
  const [isMobile, setIsMobile] = useState(false);
  // State for scroll position
  const [scrollY, setScrollY] = useState(0);
  
  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  
  // Track when section enters viewport to enable animation
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  // Set refs for both section and inView
  const setRefs = React.useCallback(
    (node: HTMLElement | null) => {
      // Ref for the section
      sectionRef.current = node;
      // Ref for inView
      inViewRef(node);
    },
    [inViewRef]
  );
  
  // Calculate section position for determining animation progress
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  
  useEffect(() => {
    if (sectionRef.current && inView) {
      const rect = sectionRef.current.getBoundingClientRect();
      setSectionTop(rect.top + window.scrollY);
      setSectionHeight(rect.height);
    }
  }, [inView, scrollY]);
  
  // Calculate scroll progress through the section
  const calculateScrollProgress = () => {
    if (!sectionHeight) return 0;
    
    // Distance scrolled past the section start
    const scrolledDistance = Math.max(0, scrollY - sectionTop + window.innerHeight/2);
    // Convert to a 0-1 progress value
    const progress = Math.min(1, Math.max(0, scrolledDistance / (sectionHeight + window.innerHeight/2)));
    
    return progress;
  };
  
  const scrollProgress = calculateScrollProgress();
  

  // Scroll tracking for that section
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start 0.9", "start 0.3"]
    });
  // Calculate text Y position based on scroll progress
  const textYPosition = useTransform(scrollYProgress, [0, 0.3], 
    isMobile ? [30, 0] : [100, -100]  // Keep mobile text in visible range with minimal movement
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const smoothY = useSpring(textYPosition, {
    stiffness: 50,
    damping: 30,
    mass: 1.2,
  });
  const smoothOpacity = useSpring(textOpacity, {
    stiffness: 60,
    damping: 30,
  });
  
  
  // Image section animation stays the same
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
      title: "Limited Quantity, Maximum Value"
    },
    {
      id: 2,
      image: "/images/card2.webp",
      title: "$AZT – The Coin of Legends"
    },
    {
      id: 3,
      image: "/images/card3.webp",
      title: "Community-Driven Power"
    }
  ];

  // Reference for cards container
  const cardsRef = useRef<HTMLDivElement | null>(null);
  
  // Get scroll progress relative to cards container
  const { scrollYProgress: cardsScrollProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to Y value (movement range)
  const cardsY = useTransform(cardsScrollProgress, [0, 1], [400, -200]);
  
  // Reference for scaling text container
  const scalingTextRef = useRef<HTMLDivElement | null>(null);
  
  // Separate scroll tracking for the scaling text
  const { scrollYProgress: scalingTextScrollProgress } = useScroll({
    target: scalingTextRef,
    offset: ["start end", "end start"]
  });
  
  // Create more mobile-friendly scale effect for text
  const textScaleX = useTransform(
    scalingTextScrollProgress, 
    [0, 0.5], 
    [isMobile ? 0.9 : 0.85, 1.0]
  );
  const scalingTextOpacity = useTransform(scalingTextScrollProgress, [0, 0.3], [0, 1]);

  // Reference for rotation image and text section
  const rotationSectionRef = useRef<HTMLDivElement | null>(null);
  
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

  // Ensure mobile animation stays visible
  useEffect(() => {
    // Reset any extreme positions on mobile devices
    if (isMobile && textContainerRef.current) {
      textContainerRef.current.style.transform = 'none';
    }
  }, [isMobile]);

  return (
    <section ref={setRefs} className="bg-black text-white overflow-hidden relative pt-24 md:pt-16 pb-32 w-screen max-w-[100vw]" id="vision">
      <div className="container mx-auto px-4 overflow-x-hidden w-full">
        <div className="flex flex-col lg:flex-row items-center overflow-hidden w-full">
          {/* Left side - Text content with scroll-based upward animation */}
          <motion.div 
            ref={textContainerRef}
            className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-6 order-1 flex items-center mb-12 lg:mb-0 overflow-hidden z-10 mt-8 md:mt-0"
            style={{ 
              y: isMobile ? 0 : smoothY, // Disable y animation on mobile completely
              opacity: smoothOpacity
            }}
          >
            <div className="lg:max-w-[500px] lg:ml-auto w-full px-1 overflow-hidden relative z-10">
              <h2 className={`${orbitron.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300 break-words`}>
                Our Vision
              </h2>
              <div className="h-1 w-12 md:w-24 bg-gradient-to-r from-amber-300 to-yellow-600 rounded-full mb-6 mx-auto lg:mx-0"></div>
              <p className={`${rubik.className} text-lg md:text-xl leading-relaxed mb-6 text-center lg:text-left font-light text-gray-100 break-words`}>
                To build a community of <span className="text-amber-300 font-medium">forward-thinkers</span> who value scarcity and long-term growth. By embracing Aztec Coin, you're not just investing in a cryptocurrency — you're embarking on a journey to uncover wealth through the power of limited supply.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-center lg:text-left text-gray-300 italic break-words">
                <span className={`text-amber-200 font-medium ${rubik.className}`}>$AZT</span> - Where vision meets value.
              </p>
            </div>
          </motion.div>
          
          {/* Right side - Image with new animation */}
          <motion.div 
            ref={imageRef}
            className="w-full lg:w-[55%] flex justify-center lg:justify-start order-2 mt-0 lg:mt-0 p-0 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ 
              opacity: imageInView ? 1 : 0, 
              scale: imageInView ? 1 : 0.9,
              filter: imageInView ? "blur(0px)" : "blur(10px)"
            }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div className="relative w-full max-w-[100%] overflow-hidden max-h-[70vh] md:max-h-none">
              {/* Image with black shadow for blending - Full height */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Aztec Coin - Long Term Growth Vision"
                  width={900}
                  height={900}
                  priority
                  className="w-full h-auto z-10 object-cover"
                  style={{ minHeight: isMobile ? "350px" : "560px" }}
                />
                
                {/* Enhanced black shadow overlay for edge blending - stronger on all sides */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.9) 100%)',
                  mixBlendMode: 'multiply',
                  zIndex: 20
                }}></div>
              </div>
              
              {/* Stronger edge shadows on all four sides */}
              <div className="absolute inset-0 z-20 pointer-events-none" style={{
                boxShadow: `
                inset 120px 0px 80px -20px rgba(0,0,0,0.85),   /* Left - strong */
                inset -120px 0px 80px -20px rgba(0,0,0,0.85),  /* Right - strong */
                inset 0px 120px 80px -40px rgba(0,0,0,0.7),    /* Bottom - more visible */
                inset 0px -120px 80px -40px rgba(0,0,0,0.7)    /* Top - more visible */
                `
              }}></div>
            </div>
          </motion.div>
        </div>
        
        {/* Cards section */}
        <div 
          ref={cardsRef}
          className="px-4 sm:px-6 lg:px-8 mb-20 relative"
        >
          {/* Centered container with max width for cards */}
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8"
              style={{ y: cardsY }}
            >
              {cards.map((card) => (
                <div key={card.id} className="flex justify-center">
                  {/* Card with new border style */}
                  <div 
                    className="relative rounded-2xl h-[240px] w-full max-w-[240px] flex flex-col group transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(145deg, #121214 0%, #0A0A0F 100%)",
                      boxShadow: "0 10px 25px -5px rgba(250, 203, 5, 0.07), 0 8px 10px -6px rgba(250, 203, 5, 0.1)"
                    }}
                  >
                    {/* New border style - double border with animation */}
                    <div className="absolute inset-0 rounded-2xl" style={{ zIndex: 1 }}>
                      {/* Outer border - thin golden line */}
                      <div className="absolute inset-0 rounded-2xl border border-yellow-500/40 group-hover:border-yellow-400/70 transition-colors duration-300"></div>
                      
                      {/* Inner border - with gap and corner accents */}
                      <div className="absolute inset-[3px] rounded-xl border border-amber-600/30 group-hover:border-amber-500/50 transition-colors duration-300"></div>
                      
                      {/* Corner accents - top left */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400/60 rounded-tl-lg"></div>
                      
                      {/* Corner accents - top right */}
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400/60 rounded-tr-lg"></div>
                      
                      {/* Corner accents - bottom left */}
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400/60 rounded-bl-lg"></div>
                      
                      {/* Corner accents - bottom right */}
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400/60 rounded-br-lg"></div>
                    </div>
                    
                    {/* Container for the image with positioning */}
                    <div className="relative w-full h-[120px] overflow-visible" style={{ zIndex: 2 }}>
                      {/* Image with centered positioning and enhanced shadow similar to About section */}
                      <div 
                        className="absolute w-[120px] h-[120px] top-[-25px] left-1/2 transform -translate-x-1/2 z-10 group-hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden"
                        style={{ 
                          filter: "drop-shadow(0 10px 15px rgba(250, 203, 5, 0.15))"
                        }}
                      >
                        <div className="absolute inset-0 bg-black opacity-20 z-10 mix-blend-overlay"></div>
        <Image 
                          src={card.image}
                          alt={card.title}
                          fill
                          priority
                          className="object-contain z-5 p-1.5"
                          style={{
                            background: "linear-gradient(145deg, rgba(18,18,20,0.6), rgba(10,10,15,0.9))"
                          }}
                        />
                        
                        {/* Advanced shadow effect like in About section */}
                        <div className="absolute inset-0 z-20 pointer-events-none" style={{
                          boxShadow: `
                          inset 40px 0px 30px -15px rgba(0,0,0,0.75),   /* Left shadow */
                          inset -40px 0px 30px -15px rgba(0,0,0,0.75),  /* Right shadow */
                          inset 0px 40px 30px -15px rgba(0,0,0,0.7),    /* Top shadow */
                          inset 0px -40px 30px -15px rgba(0,0,0,0.7)    /* Bottom shadow */
                          `
                        }}></div>
                      </div>
                      
                      {/* Dark vignette effect - now uses the advanced shadow technique */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-5 pointer-events-none" 
                           style={{ backdropFilter: "blur(1px)" }}></div>
                    </div>
                    
                    {/* Text section at bottom with gradient highlight */}
                    <div className="flex-1 flex flex-col justify-center items-center p-4 rounded-b-2xl relative z-5">
                      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 text-center group-hover:from-yellow-200 group-hover:to-amber-400 transition-all duration-300 mb-2 px-2 py-1 rounded bg-black/80 backdrop-blur-sm border border-yellow-600/20"
                          style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(250, 203, 5, 0.05)" }}>
                        {card.title}
                      </h3>
                      
                      {/* Optional decorative elements - smoother gradient */}
                      <div className="absolute bottom-0 left-0 w-full h-[1px]" 
                           style={{ background: "linear-gradient(90deg, rgba(250, 203, 5, 0) 0%, rgba(250, 203, 5, 0.3) 50%, rgba(250, 203, 5, 0) 100%)" }}></div>
                    </div>
                    
                    {/* Hover animation effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-amber-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" style={{ zIndex: 0 }}></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scaling Text Section */}
        <div 
          ref={scalingTextRef}
          className="py-12 px-4 bg-black sm:px-8 min-h-[300px] flex items-center justify-center overflow-hidden"
         
        >
          <motion.div 
            className="max-w-4xl text-center"
            style={{ 
              scale: textScaleX,
              opacity: scalingTextOpacity,
              transformOrigin: "center"
            }}
          >
            <h2 className={`${orbitron.className} text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight leading-tight px-2`}>
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
                {/* Coin image with enhanced styling for better blending */}
                <div className="w-full max-w-[600px] relative">
                  <div className="absolute inset-0 rounded-full blur-3xl opacity-30" style={{ 
                    background: "radial-gradient(circle, rgba(250, 203, 5, 0.7) 0%, rgba(250, 203, 5, 0) 70%)",
                    transform: "scale(0.85)"
                  }}></div>
                  <Image
                    src="/images/coinimage.png"
                    alt="Aztec Coin"
                    width={1600}
                    height={1600}
                    priority
                    className="w-full h-auto relative z-10"
                    style={{ 
                      filter: "drop-shadow(0 0 30px rgba(250, 203, 5, 0.35))"
                    }}
                  />
                  <div className="absolute inset-0 z-20 pointer-events-none" style={{
                    background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
                    mixBlendMode: "multiply"
                  }}></div>
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