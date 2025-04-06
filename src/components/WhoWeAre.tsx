import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/2.jpg"
          alt="Who We Are Background"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/85 to-dark/80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Who We Are</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark/70 p-8 rounded-lg border border-primary/20 backdrop-blur-sm mb-12">
            <p className="text-lg text-white text-center leading-relaxed font-medium">
              Aztec Coin is a treasure hunt rewarding those who understand the power of long-term holding. Built on the Solana network, it offers fast, low-cost transactions with a limited supply, ensuring both scarcity and real value.
            </p>
          </div>
            
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
              Our Vision
            </h3>
            <div className="bg-dark/70 p-8 rounded-lg border border-primary/20 backdrop-blur-sm">
              <p className="text-lg text-white text-center leading-relaxed font-medium">
                To build a community of forward-thinkers who value scarcity and long-term growth. By embracing Aztec Coin, you're not just investing in a cryptocurrency — you're embarking on a journey to uncover wealth through the power of limited supply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 