import React from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';

export default function App() {
  return (
    <div className="bg-secondary text-gray-900">
      <HeroSection />
      <Features />
    </div>
  );
}