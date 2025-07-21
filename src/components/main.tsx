"use client";
import React from 'react';
import SplitText from './animations/splittext';
import Hyperspeed from "@/blocks/Backgrounds/Hyperspeed/Hyperspeed";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const main = () => {
  return (
    // <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
    //   {/* Hyperspeed background */}
    //   <div className="absolute inset-0 w-full h-full -z-10">
    //     <Hyperspeed />
    //   </div>
    //   {/* Overlay text */}
    //   <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
    //     <h1 className="text-white text-4xl font-bold"></h1>
    //   </div>
    //   {/* Animated text */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
        <SplitText
          text="Hello,I'am Nimesh!"
          className="text-6xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="elastc.out(1,0.3)"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <SplitText
          text="Welcome to my portfolio."
          className="text-6xl font-semibold text-center mt-4"
          delay={100}
          duration={0.6}
          ease="elastc.out(1,0.3)"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
    //  </div>
  );
};

export default main;