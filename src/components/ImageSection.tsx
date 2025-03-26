import React from 'react';
import Image from 'next/image';

export default function ImageSection() {
  return (
    <section className="bg-dark overflow-hidden">
    <div className="mx-[-16px] md:mx-[-32px] lg:mx-[-64px] h-[600px]">
      <div className="relative w-full h-full">
        <Image
          src="/images/shutterstock_2425153259.jpg"
          alt="Aztec Coin"
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
      </div>
    </div>
  </section>
  );
} 