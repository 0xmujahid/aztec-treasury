"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Inter, Rubik } from 'next/font/google';
 
const rubik = Rubik({ 
  subsets: ['latin'],
  weight: ['700']
});

export default function WhoWeAre() {
  const textControls = useAnimation();
  const imageControls = useAnimation();
  
  // References for section elements
  const imageContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const sectionRef = useRef(null);
  
  // Get scroll progress for the entire section
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Get scroll progress specifically for image section
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"]
  });
  
  // Get scroll progress specifically for text section
  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textContainerRef,
    offset: ["start end", "center center"]
  });
  
  // Create transformations for image based on scroll
  const imageScale = useTransform(imageScrollProgress, [0, 0.6], [0.5, 1]);
  const imageOpacity = useTransform(imageScrollProgress, [0, 0.4], [0.3, 1]);
  
  // Create transformations for text based on scroll - scaling and opacity effect
  const textScale = useTransform(textScrollProgress, [0, 1], [0.5, 1]);
  const textOpacity = useTransform(textScrollProgress, [0, 0.4], [0, 1]);
  
  // Add spring physics to smooth the animation while keeping it tied to scroll
  const smoothTextScale = useSpring(textScale, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });
  
  const smoothTextOpacity = useSpring(textOpacity, {
    stiffness: 60,
    damping: 20
  });
  
  // Animation variants for image - only used for initial appearance
  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      x: -50
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="bg-black text-white overflow-hidden relative" id="about">
      <div className="container-fluid px-0 lg:px-0">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left side - Image */}
          <motion.div 
            ref={imageContainerRef}
            className="w-full lg:w-1/2 flex justify-start order-2 lg:order-1 bg-black"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-full max-w-[800px] ml-0 overflow-hidden rounded-xl">
              {/* Image with scroll-based animations */}
              <motion.div
                className="w-full h-full"
                style={{
                  scale: imageScale,
                  opacity: imageOpacity
                }}
              >
                <Image
                  src="/images/balance1.webp"
                  alt="Aztec Coin - Hidden Treasure"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto max-h-[600px] z-10 rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Text content with scaling and fade-in animation */}
          <motion.div 
            ref={textContainerRef}
            className="w-full lg:w-1/2 px-4 lg:px-4 order-1 lg:order-2 mb-6 lg:mb-0 flex flex-col items-start justify-start bg-black"
            style={{
              scale: smoothTextScale,
              opacity: smoothTextOpacity,
              transformOrigin: "top left"
            }}
          >
            <div className="lg:max-w-[500px] self-start pt-12 lg:pt-32">
              <p className={`${rubik.className} text-lg md:text-xl leading-relaxed mb-0 text-left font-light tracking-wide font-serif italic`}>
                <span className="text-amber-300 font-semibold not-italic">$Aztec Coin</span> is a treasure hunt rewarding those who understand the power of long-term holding. Built on the <span className="text-amber-300 font-semibold not-italic">Solana network</span>, it offers fast, low-cost transactions with a limited supply, ensuring both scarcity and real value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}