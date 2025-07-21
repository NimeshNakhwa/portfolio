// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// // Width animation config
// const transition = {
//   type: "spring",
//   mass: 0.5,
//   damping: 11.5,
//   stiffness: 100,
//   restDelta: 0.001,
//   restSpeed: 0.001,
// } as const;

// const Header = () => {
//   const [active, setActive] = useState<string | null>(null);

//   return (
//     <motion.nav
//       initial={{ width: 500 }}
//       animate={{
//         width
//             :active === "Home"
//             ? 750
//             :active === "Skills"
//             ? 750
//             : active === "About"
//             ? 750
//             : 600, // default width
//       }}
//       transition={transition}
//       className="w-full max-w-6xl mx-auto px-8 py-4"
//       onMouseLeave={() => setActive(null)} // revert when mouse leaves nav
//     >
//       <Menu>
//         <MenuItem
//           item="Home"
//           href="/"
//           onHover={() => setActive("Home")}
//         />
//         <MenuItem
//           item="Skills"
//           href="/skills"
//           onHover={() => setActive("Skills")}
//         />
//         <MenuItem
//           item="About"
//           href="/about"
//           onHover={() => setActive("About")}
//         />
//       </Menu>
//     </motion.nav>
//   );
// };

// // ⬇️ Menu Wrapper
// const Menu = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="relative w-full flex justify-center space-x-8 px-16 py-6 rounded-full border bg-white shadow dark:bg-black dark:border-white/20">
//       {children}
//     </div>
//   );
// };

// // ⬇️ Menu Item Button
// const MenuItem = ({
//   item,
//   href,
//   onHover,
// }: {
//   item: string;
//   href?: string;
//   onHover?: () => void;
// }) => {
//   return (
//     <div onMouseEnter={onHover} className="relative">
//       {href ? (
//         <Link
//           href={href}
//           className="text-black dark:text-white font-medium text-sm hover:opacity-80 transition-opacity"
//         >
//           {item}
//         </Link>
//       ) : (
//         <span className="text-black dark:text-white">{item}</span>
//       )}
//     </div>
//   );
// };

// export default Header;


"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Transition configuration
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as const;

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show the navbar on scroll up, hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY) {
        setShowHeader(true);
      } else if (currentY > lastScrollY) {
        setShowHeader(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.nav
        
          key="navbar"
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            width
                : active === "Home"
                ? 750
                :active === "Skills"
                ? 750
                : active === "About"
                ? 750
                : 600,
          }}
          exit={{ opacity: 0, y: -50 }}
          transition={transition}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-6xl px-8 py-4"
          onMouseLeave={() => setActive(null)}
        >
          <Menu>
            <MenuItem item="Home" href="/" onHover={() => setActive("Home")} />
            <MenuItem item="Skills" href="/skills" onHover={() => setActive("Skills")} />
            <MenuItem item="My WeatherApp" href="https://nimeshweatherapp.netlify.app" onHover={() => setActive("About")} />
          </Menu>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

// Navigation container
const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex justify-center space-x-8 rounded-full border px-16 py-6 bg-white shadow dark:bg-black dark:border-white/20">
      {children}
    </div>
  );
};

// Navigation link
const MenuItem = ({
  item,
  href,
  onHover,
}: {
  item: string;
  href?: string;
  onHover?: () => void;
}) => {
  return (
    <div onMouseEnter={onHover} className="relative">
      <Link
        href={href || "#"}
        className="text-black dark:text-white font-medium text-sm hover:opacity-80 transition-opacity"
      >
        {item}
      </Link>
    </div>
  );
};

export default Header;





