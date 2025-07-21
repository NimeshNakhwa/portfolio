
"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState, useMemo } from "react";

import Hyperspeed from "@/blocks/Backgrounds/Hyperspeed/Hyperspeed";

// Example testimonials data
const testimonials = [
  {
    quote: "The standard markup language used to structure content on the web.",
    name: "HTML",
    designation: " ",
    src: "/HTML.png",
  },
    {
    quote: "A stylesheet language used to control the layout and appearance of web elements",
    name: "CSS ",
    designation: " ",
    src: "/CSS.png",
  },
    {
    quote: "Low-level programming languages used for system software, game development, and performance-critical applications.",
    name: "C/C++ ",
    designation: "",
    src: "/C.png",
  },
    {
    quote: "A high-level, interpreted language known for its readability and use in web, data science, and automation.",
    name: "Python ",
    designation: "",
    src: "/Python.png",
  },
    {
    quote: "A utility-first CSS framework for rapidly building custom user interfaces.",
    name: "Tailwind CSS",
    designation: "",
    src: "/TailwindCSS.png",
  },
    {
    quote: "A versatile scripting language used to create dynamic and interactive web content.",
    name: "JavaScript",
    designation: "",
    src: "/JavaScript.png",
  }
  // Add more testimonials as needed
];

const testimonials2 = [
  {
    quote: "A JavaScript library for building fast, reusable, and interactive user interfaces.",
    name: "React Js",
    designation: " ",
    src: "/Reactjs.png",
  },
  {
    quote: "A React-based framework for building full-stack web applications with features like routing, SSR, and API support.",
    name: "Next Js",
    designation: " ",
    src: "/Nextjs.png",
  }
  // Add more testimonials as needed
];

const testimonials3 = [
  {
    quote: " A powerful open-source relational database system known for its robustness and extensibility.",
    name: "PostgreSQL",
    designation: "",
    src: "/Postgresql.png",
  },
  {
    quote: " A widely-used open-source relational database management system, especially popular in web development.",
    name: "MySQL",
    designation: "",
    src: "/Mysql.png",
  },
  {
    quote: "A lightweight but powerful source-code editor developed by Microsoft with support for many programming languages.",
    name: "VS Code",
    designation: "",
    src: "/Vscode.png",
  },
  {
    quote: "An integrated development environment (IDE) for writing, compiling, and debugging C/C++ programs.",
    name: "Dev C++",
    designation: "",
    src: "/Devcpp.png",
  },
  {
    quote: "An open-source web application used for creating and sharing documents that contain live code, equations, and visualizations.",
    name: "Jupyter Notebook",
    designation: "",
    src: "/Jupyter.png",
  },
  {
    quote: " A cloud platform for deploying and hosting static websites and front-end projects with continuous deployment.",
    name: "Netlify",
    designation: "",
    src: "/Netlify.png",
  },
  {
    quote: " A platform optimized for hosting Next.js and React applications with automatic builds and serverless functions.",
    name: "Vercel",
    designation: "",
    src: "/Vercel.png",
  },
  {
    quote: "A graphic design tool that allows users to create visuals like presentations, posters, and social media graphics easily.",
    name: "Canva",
    designation: "",
    src: "/Canva.png",
  },
  {
    quote: "A cloud-based platform for version control and collaboration, allowing developers to host, manage, and share code using Git.",
    name: "Github",
    designation: "",
    src: "/Github.png",
  }
  // Add more testimonials as needed
];

export default function SkillsPage() {
  return (

    <div>          
      <h1 className='px-7 items-center font-bold text-3xl'>PROGRAMING LANGUAGES</h1>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
      <h1 className='px-7 items-center font-bold text-3xl'>FRONTEND</h1>
      <AnimatedTestimonials testimonials={testimonials2} autoplay />
      <h1 className='px-7 items-center font-bold text-3xl'>TOOLS</h1>
      <AnimatedTestimonials testimonials={testimonials3} autoplay />
    </div>
  );
}


type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  const randomRotations = useMemo(
  () => testimonials.map(() => randomRotateY()),
  []
);

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                  rotate: randomRotations[index],

                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotations[index],
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotations[index],

                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

