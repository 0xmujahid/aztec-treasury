import React from 'react';
import Image from 'next/image';

export default function ImageSection() {
  return (
    <section className="bg-dark overflow-hidden relative">
  {/* This is the key overlay element */}
  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>

  <div className="mx-[-16px] md:mx-[-32px] lg:mx-[-64px] h-[600px] relative">
    <div className="relative w-full h-full">
      <Image
        src="/images/footerimg.jpg"
        alt="Aztec Coin"
        fill
        style={{ 
          objectFit: 'cover',
          filter: 'brightness(0.9)' // Darkens image slightly
        }}
      />
      
      {/* Existing bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
      
      {/* Cartoon Character */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[400px] md:w-[400px] md:h-[500px] z-20">
        <Image
          src="/images/cartoon.png"
          alt="Cartoon Character"
          fill
          style={{ 
            objectFit: 'contain',
            filter: 'drop-shadow(4px 8px 12px rgba(0, 0, 0, 0.5))' // Adds a shadow effect
          }}
        />
      </div>
    </div>
  </div>
</section>
  );
} 