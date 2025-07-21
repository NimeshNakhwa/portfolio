// import React from 'react'
// import Link from "next/link";
// const Footer = () => {
//   return (
//     <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
//       <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
//         <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//         <link 
//         className="hover:text-blue-500 "
//         href="/"
//         >
//           Nimesh's Portfolio</link>
//         </span>
//         <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
//           <li>
//             <a
//               href="https://www.linkedin.com/in/nimesh-nakhwa"
//               className="hover:underline me-4 md:me-6"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               LinkedIn
//             </a>
//           </li>
//           <li>
//                         <a
//               href="https://github.com/NimeshNakhwa"
//               className="hover:underline me-4 md:me-6"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Github
//             </a>
//           </li>
//           <li>
//             <a href="https://www.instagram.com/nimesh_nakhwa_/" 
//             className="hover:underline me-4 md:me-6"
//             target="_blank"
//             rel="noopener noreferrer"
//             >
//               Instagram
//             </a>
//           </li>
//           <li>
//             <a href="mailto:nimeshnakhwa100@gmail.com"
//             className="hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//             >
//               Email</a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"; 

export default function Footer() {
  // const footerLinks = [
  //   { name: "Home", href: "/" },
  //   { name: "About", href: "/about" },
  //   { name: "Skills", href: "/skills" },
  //   { name: "Projects", href: "/projects" },
  //   { name: "Contact", href: "/contact" },
  // ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/NimeshNakhwa",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nimeshnakhwa/",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      href: "mailto:nimesh@example.com",
      icon: <FaEnvelope />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nimesh_nakhwa_/",
      icon: <FaInstagram />,
    }
  ];

  return (
    <footer className="w-full border-t border-gray-200 dark:border-neutral-800 py-10 mt-12 relative bg-gradient-to-b from-white/70 via-white/40 to-blue-100/50 dark:from-neutral-900/90 dark:via-neutral-900/90 dark:to-blue-950/80 backdrop-blur-md shadow-2xl">
      {/* Top glowing bar */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-40 h-2 bg-gradient-to-r from-blue-400 via-fuchsia-500 to-pink-400 blur-xl opacity-70 rounded-full"></div>

      {/* Navigation links */}
      {/* <div className="flex flex-wrap justify-center gap-8 mb-6 text-base font-medium">
        {footerLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="transition-all duration-300 rounded px-4 py-2 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            {link.name}
          </Link>
        ))}
      </div> */}

      {/* Social icons */}
      <div className="flex justify-center gap-6 mb-4">
        {socials.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="text-2xl text-gray-600 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400 transition duration-200 transform hover:-translate-y-1"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="mx-auto mb-3 w-24 h-1 rounded bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400 blur-sm opacity-60"></div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500 dark:text-neutral-400 italic select-none tracking-wide">
        &copy; {new Date().getFullYear()} <span className="font-semibold gradient-text">Nimesh Nakhwa</span>
        {" "}— Crafted with Next.js
      </p>

      {/* Extra gradient corners */}
      <div className="pointer-events-none absolute -left-14 -bottom-12 w-48 h-24 bg-gradient-to-br from-blue-300/40 via-blue-100/10 to-transparent rounded-full blur-3xl opacity-40"></div>
      <div className="pointer-events-none absolute -right-16 -top-20 w-52 h-28 bg-gradient-to-tl from-pink-300/40 via-purple-100/10 to-transparent rounded-full blur-3xl opacity-30"></div>
    </footer>
  );
}

