"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhoWeAre() {
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

  // Animation variants for image
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
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for text
  const textVariants = {
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
    <section className="bg-[#0A0A0A] text-white overflow-hidden relative" id="about">
      <div className="container-fluid px-0 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Image */}
          <motion.div 
            ref={imageRef}
            className="w-full lg:w-1/2 flex justify-start order-2 lg:order-1 mt-8 lg:mt-0"
            initial="hidden"
            animate={imageControls}
            variants={imageVariants}
          >
            <div className="relative w-full max-w-[680px] ml-0 overflow-hidden rounded-xl">
              {/* Shadow effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_50px_rgba(10,10,10,0.95)] z-20 pointer-events-none"></div>
              
              {/* Image */}
              <Image
                src="/images/balance.png"
                alt="Aztec Coin - Hidden Treasure"
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
          
          {/* Right side - Text content */}
          <motion.div 
            ref={textRef}
            className="w-full lg:w-1/2 px-4 lg:px-4 order-1 lg:order-2 mb-6 lg:mb-0 flex items-center"
            initial="hidden"
            animate={textControls}
            variants={textVariants}
          >
            <div className="lg:max-w-[500px]">
              <p className="text-lg md:text-xl leading-relaxed mb-0 text-center lg:text-left">
                $Aztec Coin is a treasure hunt rewarding those who understand the power of long-term holding. Built on the Solana network, it offers fast, low-cost transactions with a limited supply, ensuring both scarcity and real value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}