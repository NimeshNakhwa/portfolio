// import React from 'react'

// const main = () => {
//   return (
//     <div>Hello I'am Nimesh</div>
//   )
// }

// export default main
// import React from 'react';

// const main = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <img
//           className="w-24 h-24 rounded-full mx-auto"
//           src="/profile.jpg"
//           alt="Profile"
//         />
//         <h2 className="text-xl font-semibold text-center mt-4">Nimesh Nakhwa</h2>
//         <p className="text-gray-600 text-center">Web Developer</p>
//         <div className="flex justify-center mt-4">

//         </div>
//       </div>
//     </div>
//   );
// };

// export default main;
"use client";
import React from 'react';
import SplitText from './animations/splittext';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const main = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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
  );
};

export default main;