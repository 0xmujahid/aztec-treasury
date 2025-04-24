"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { Cinzel, Playfair_Display } from 'next/font/google';

// Load custom fonts
const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

export default function AtmFeature() {
  // Reference for the section
  const sectionRef = useRef(null);
  
  // Get scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create animations for the image (slide from left)
  const imageX = useTransform(scrollYProgress, [0.1, 0.4], [-200, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  // Create animations for the text titles
  const titleScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1.1]);
  const titleOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  
  // More specific text animations
  const headingScale = useTransform(scrollYProgress, [0.25, 0.45], [0.7, 1.05]);
  const paragraphScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);
  const readyTextScale = useTransform(scrollYProgress, [0.35, 0.55], [0.6, 1.1]);
  
  // Feature items animations
  const featureItemsY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  const featureItemsOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-dark/90 to-dark text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image with slide-in animation */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            style={{ 
              x: imageX,
              opacity: imageOpacity
            }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
            <div className="relative h-[400px] w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/atmmachine.jpg"
                alt="$Azt Coin ATM"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-dark/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
                <h3 className="text-xl text-primary font-bold text-center">$Azt Coin ATMs</h3>
                <p className="text-sm text-gray-300 text-center">Coming to major cities worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content with scale and opacity animations */}
          
          <motion.div 
                className="w-full lg:w-1/2 px-4"
                style={{ 
                  opacity: titleOpacity
                }}
              >
                <div className="lg:max-w-[550px]">
                  <div className={`${cinzel.className} mb-8`}>
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-400 text-center mb-4"
                      style={{
                        scale: headingScale,
                        opacity: titleOpacity
                      }}
                    >
                     $Azt Coin ATMs
                    </motion.h3>
                    <motion.p 
                      className={`${playfair.className} text-xl md:text-2xl leading-relaxed text-center text-white italic`}
                      style={{
                        scale: paragraphScale,
                        opacity: titleOpacity
                      }}
                    >
                      We are taking things even further soon, you’ll be able to withdraw and deposit your $AZT through $Azt Coin ATMs with zero fees. Our ATMs will make accessing your funds even easier, anywhere, anytime
                    </motion.p>
                  </div>
                  
                  {/* Feature points with gold icons */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 justify-center">
                      <motion.h2 
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-400 text-center transform hover:scale-105 transition-transform duration-300" 
                        style={{ 
                          textShadow: '0 0 15px rgba(250,203,5,0.5)',
                          scale: readyTextScale,
                          opacity: useTransform(scrollYProgress, [0.35, 0.55], [0, 1])
                        }}
                      >
                        $Azt Coin is about building wealth while enjoying the ride.
                      </motion.h2>
                    </div>
                  </div>
                </div>
              </motion.div>
            
      
        </div>
      </div>
    </section>
  );
} 