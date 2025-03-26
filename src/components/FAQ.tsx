"use client";

import React, { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-primary/20 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full p-6 text-left flex justify-between items-center bg-dark/50 hover:bg-dark/70 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-semibold">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 bg-dark/30 text-gray-300">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqItems = [
    {
      question: 'What is Aztec Treasury?',
      answer: 'Aztec Treasury is a cryptocurrency project inspired by the concept of hidden treasures from ancient civilizations. Our project combines modern blockchain technology with the allure of historical wealth, creating a unique digital asset that offers both scarcity and utility within our ecosystem.',
    },
    {
      question: 'How can I buy AZTEC tokens?',
      answer: 'AZTEC tokens can be purchased on various exchanges including Uniswap and PancakeSwap. Connect your wallet, search for the AZTEC token (always verify the contract address from our official channels), and complete your purchase. Detailed guides are available in our documentation section.',
    },
    {
      question: 'What makes Aztec Treasury unique?',
      answer: 'Our project features a unique Hidden Treasury algorithm that automatically allocates 5% of all transactions to a community-governed treasury fund. Additionally, we implement a deflationary mechanism with a 3% burn on transactions, combined with a strong focus on community governance and real utility.',
    },
    {
      question: 'Is there a maximum supply of AZTEC tokens?',
      answer: 'Yes, the maximum supply of AZTEC tokens is capped at 1,000,000,000 (1 billion) tokens. This fixed supply ensures scarcity and potential value appreciation over time as demand increases.',
    },
    {
      question: 'How does the community treasury work?',
      answer: 'The community treasury collects 5% of all transactions and is governed by token holders through voting. Proposals for treasury fund usage can be submitted by community members, and token holders can vote on these proposals. Treasury funds can be allocated to development, marketing, partnerships, and other initiatives that benefit the ecosystem.',
    },
    {
      question: 'What are the staking rewards?',
      answer: 'Staking rewards vary based on market conditions and treasury performance, but typically range from 8-15% APY. Early stakers and those who commit to longer staking periods may receive bonus rewards. The exact rewards are displayed in our staking platform.',
    },
    {
      question: 'How can I participate in governance?',
      answer: 'All AZTEC token holders can participate in governance by voting on proposals through our governance platform. The voting power is proportional to the number of tokens held. To submit your own proposal, you need to hold at least 100,000 AZTEC tokens.',
    },
    {
      question: 'Is the smart contract audited?',
      answer: 'Yes, our smart contracts have been audited by leading blockchain security firms to ensure maximum security and reliability. The full audit reports are available on our documentation page and GitHub repository.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-dark/90 to-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Frequently Asked</span> Questions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to the most common questions about Aztec Treasury.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}

          <div className="mt-12 p-8 bg-dark/50 rounded-xl border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              If you couldn't find the answer to your question, feel free to reach out to our community or support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.me/aztectreasury" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-secondary text-dark font-bold py-3 px-6 rounded-lg transition">
                Join Telegram Support
              </a>
              <a href="mailto:support@aztectreasury.com" className="border-2 border-primary hover:bg-primary/20 text-white font-bold py-3 px-6 rounded-lg transition">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 