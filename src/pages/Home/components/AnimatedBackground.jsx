import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2f024f] via-[#000] to-[#2f024f] animate-gradient-shift"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2f024f] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#4a0e7a] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#1a0129] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}
