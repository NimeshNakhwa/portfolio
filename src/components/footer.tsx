import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <a 
        className="hover:text-blue-500 "
        href="tel:+917900110997"
        >
          Nimesh™</a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/nimesh-nakhwa"
              className="hover:underline me-4 md:me-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
                        <a
              href="https://github.com/NimeshNakhwa"
              className="hover:underline me-4 md:me-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nimesh_nakhwa_/" 
            className="hover:underline me-4 md:me-6"
            target="_blank"
            rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:nimeshnakhwa100@gmail.com"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            >
              Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
