"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, Variants, useAnimation, useScroll, useTransform,useSpring } from "framer-motion";
import { Cinzel, Playfair_Display ,Orbitron, Rubik} from 'next/font/google';

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
  weight: ['500']
});
const rubik = Rubik({ 
  subsets: ['latin'],
  weight: ['700']
});

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [hasImageLoaded, setHasImageLoaded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Reference for the hero section
  const heroRef = useRef(null);
  
  // Get scroll progress specifically for this section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Create separate animations for mobile/desktop
  const desktopTextSlide = useTransform(scrollYProgress, [0, 1], [120, -50]);
  const mobileTextSlide = useTransform(scrollYProgress, [0, 0.6], [-20, 120]); // Left-to-right on mobile
  const imageUpSlide = useTransform(scrollYProgress, [0, 1], [300, 0]);
  
  // Mobile-specific animations (scale and fade)
  const mobileTextScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.05]);
  const mobileTextOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);
  const mobileImageScale = useTransform(scrollYProgress, [0.1, 0.6], [0.85, 1]);
  
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 1]); // Start with some visibility

  // Spring animations for smooth movement
  const smoothDesktopTextLeft = useSpring(desktopTextSlide, {
    stiffness: 30,  // Lower = smoother
    damping: 20,
    restDelta: 0.001,
  });
  
  const smoothMobileTextLeft = useSpring(mobileTextSlide, {
    stiffness: 25,  // Even smoother for mobile
    damping: 15,
    restDelta: 0.001,
  });
  
  const smoothImageUp = useSpring(imageUpSlide, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.001,
  });
  
  // Mobile animation springs
  const smoothMobileTextScale = useSpring(mobileTextScale, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  });
  
  const smoothMobileImageScale = useSpring(mobileImageScale, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  });

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

  const text = "The Hidden Treasure of Cryptocurrency";

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
        ease: "easeInOut",
        type: "spring",
        stiffness: 20,  // More responsive
        damping: 12,    // Smoother settling
        duration: 1.8,  // Faster initial animation
        delay: 0.3      // Less delay for better responsiveness
      }
    }
  };
  
  return (
    <section ref={heroRef} className="relative min-h-screen bg-black text-white overflow-hidden pt-48">
      {/* Content */}
      <div className="container-fluid mx-auto pt-16 md:pt-24 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between relative">
          
          {/* Create a fixed container for text positioning */}
          <motion.div 
            className="w-full lg:w-1/2 px-4 lg:px-8 text-center lg:text-left relative z-10 order-1 lg:order-1 mt-0 mb-8 lg:mb-0 overflow-visible"
            style={{ 
              x: isMobile ? smoothMobileTextLeft : smoothDesktopTextLeft,
              scale: isMobile ? smoothMobileTextScale : 1,
              opacity: isMobile ? mobileTextOpacity : 1,
            }}
          >
            {/* Text container with right padding to ensure content remains visible when moving left */}
            <div className={`relative z-10 lg:pr-24 lg:ml-12`}>
              {/* Text background to ensure visibility */}
              <div className="absolute inset-0 bg-black backdrop-blur-sm -z-10 rounded-xl"></div>
              
              <h1 className={`${orbitron.className} text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-shadow-sm`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300">The Hidden</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300">Treasure</span>
                <br />
                <span>of Cryptocurrency</span>
              </h1>
              
              <h2 className={`${rubik.className} text-xl md:text-2xl mb-8 font-light text-white text-shadow-sm ${isMobile ? "mx-auto" : "lg:mx-0"}`} style={{ maxWidth: "90%", margin: isMobile ? "0 auto" : "0" }}>
                With a total supply of only 15 million coins, Aztec Coin is one of the lowest supply crypto in existence, even lower than Bitcoin.Creating enormous potential for long-term wealth generation. The fewer the coins, the greater the value. Truly unique Assets
              </h2>

             
            </div>
          </motion.div>
          
          {/* Image container with scroll-based animation */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-2 mb-6 lg:mb-0">
            <motion.div 
              className="w-full flex justify-center items-center"
              style={{
                y: isMobile ? 0 : smoothImageUp,
                scale: isMobile ? smoothMobileImageScale : 1,
                opacity: imageOpacity
              }}
            >
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] overflow-hidden rounded-xl">
                  {/* Image */}
                  <Image
                    src="/images/hero1.webp"
                    alt="Aztec Token"
                    fill
                    priority
                    className="object-cover w-full h-full z-10"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 