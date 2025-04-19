"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const textControls = useAnimation();
  const imageControls = useAnimation();
  
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

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [textControls, textInView]);
  
  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    } else {
      imageControls.start("hidden");
    }
  }, [imageControls, imageInView]);

  // Animation variants for text - slides up when scrolling
  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for image - slides from right to left
  const imageVariants = {
    hidden: { 
      opacity: 0,
      x: 200
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-[#0A0A0A] text-white overflow-hidden relative" id="vision">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Text content with upward animation */}
          <motion.div 
            ref={textRef}
            className="w-full lg:w-1/2 px-4 lg:pr-8 order-1 flex items-center"
            initial="hidden"
            animate={textControls}
            variants={textVariants}
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
            initial="hidden"
            animate={imageControls}
            variants={imageVariants}
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
      </div>
    </section>
  );
} 