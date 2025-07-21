// "use client";
// import React from "react";
// import { Timeline } from "@/components/animations/timeline";

// export function Project() {
//   const data = [
//     {
//       title: "2‑Sep 2024 – 28‑Feb 2025",
//       content: (
//         <div>
//           <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//             Completed an internship at Vighnotech. Learned scalable web‑app development and team collaboration.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
//               alt="Modern office workspace"
//               className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//             />
//             <img
//               src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
//               alt="Team working together in meeting"
//               className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80"
//               alt="Software developer coding on laptop"
//               className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//             />
//             <img
//               src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg"
//               alt="Modern professional workspace"
//               className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Early 2024",
//       content: (
//         <div>
//           <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//             Focused on enhancing my full‑stack development skills by diving into modern web technologies, coding best practices, and building responsive applications.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60"
//               alt="Full‑stack coding"
//               className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//             />
           
//             <img
//               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60"
//               alt="Responsive interface design"
//               className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//             />
//             <img
//               src="https://images.pexels.com/photos/7989024/pexels-photo-7989024.jpeg"
//               alt="Code review session"
//               className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//             />
//           </div>
//         </div>
//       ),
//     },
//    {
//   title: "Extracurricular – CSI Member",
//   content: (
//     <div>
//       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
//         Actively participated in college events as a member of the CSI club, organizing tech workshops and contributing to community projects.
//       </p>
//       <div className="grid grid-cols-2 gap-4">
//         <img
//           src="https://images.pexels.com/photos/1181308/pexels-photo-1181308.jpeg"
//           alt="Student tech workshop"
//           className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//         />
//         <img
//           src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg"
//           alt="College group activity"
//           className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//         />
//         <img
//           src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg"
//           alt="Volunteering for a community event"
//           className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//         />
//         <img
//           src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
//           alt="Student networking at tech event"
//           className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
//         />
//       </div>
//     </div>
//   ),
// }

//   ];

//   return (
//     <div className="relative w-full overflow-hidden">
//       <Timeline data={data} />
//     </div>
//   );
// }
// // https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60
// export default Project;

import React from "react";
import { Timeline } from "@/components/animations/timeline";
import Image from 'next/image';

export function Project() {
  const data = [
    {
      title: "First Project(A To-Do List)",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            Built a To-Do List on React Js + Vite.It includes a simple UI with add, delete, and edit functionalities.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="Todocode.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="Todoweb1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="Todoweb2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="Todoweb3.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Weather App",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            Built a Weather App using React Js + Vite.It fetches data from the OpenWeatherMap API and displays the current weather conditions for a given city. 
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            It includes a simple UI with search functionality to get the weather of any city.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="Weathercode.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="Weather1.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="Weather3.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="Weather4.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Card grid component
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Random file upload lol
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <img
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
export default Project;