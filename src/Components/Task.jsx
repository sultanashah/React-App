// // App.js
// import Accordion from "./components/Accordion";
// import { useState } from "react";
// import Navbar from "./components/Navbar";

// const Task = () => {
//   const [accordions, setAccordion] = useState([
//     {
//       key: 1,
//       title: "What is GeeksforGeeks?",
//       data: `GeeksforGeeks is a one stop solution 
// 					for all computer science students.`,
//       isOpen: false,
//     },
//     {
//       key: 2,
//       title: "What GeeksforGeeks offer us?",
//       data: `GeeksforGeeks offers Free Tutorials, 
// 					Millions of Articles, Live, Online and 
// 					Classroom Courses,Frequent Coding Competitions, 
// 					Webinars by Industry Experts, Internship 
// 					opportunities and Job Opportunities.`,
//       isOpen: false,
//     },
//     {
//       key: 3,
//       title: "Which is the best portal to study Computer Science?",
//       data: `GeeksforGeeks is the best Computer Science portal 
// 					for geeks. It contains well written, well thought 
// 					and well explained computer science and programming 
// 					articles.`,
//       isOpen: false,
//     },
//   ]);

//   const toggleAccordion = (accordionkey) => {
//     const updatedAccordions = accordions.map((accord) => {
//       if (accord.key === accordionkey) {
//         return { ...accord, isOpen: !accord.isOpen };
//       } else {
//         return { ...accord, isOpen: false };
//       }
//     });

//     setAccordion(updatedAccordions);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="p-2 m-8">
//         <h2 className="text-2xl mb-2 mx-auto text-green-800">
//           Accordion Using React and Tailwind
//         </h2>
//         {accordions.map((accordion) => (
//           <Accordion
//             key={accordion.key}
//             title={accordion.title}
//             data={accordion.data}
//             isOpen={accordion.isOpen}
//             toggleAccordion={() => toggleAccordion(accordion.key)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Task;

// import React from "react";
// import img1 from "../images/womenimage.png";
// const Task = () => {
//   return (
//     <>
//       {/* TASK */}
//       <div className="flex p-5 bg-[white] rounded-t-xl focus:ring-5">
//         <div
//           id="accordion-color"
//           accordion="collapse"
//           data-active-classes="bg-white text-blue-600 text-black"
//           className="flex justify-between"
//         >
//           <img className="p-5 w-[360px]" src={img1} alt="" />
//         </div>
//         <div className="flex bg-grey w-full flex-col ">
//           <h1 className="font-medium rtl:text-right text-black gap-3">FAQ</h1>
//           <h2 id="accordion-color-heading-1">
//             <button
//               type="button"
//               class="flex items-center justify-between w-full direction-col p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
//               accordion-target="#accordion-color-body-1"
//               aria-expanded="true"
//               aria-controls="accordion-color-body-1"
//             >
//               <span>How many team members can I invite?</span>
//               <svg
//                 accordion-icon
//                 class="w-3 h-3 rotate-180 shrink-0"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 10 6"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M9 5 5 1 1 5"
//                 />
//               </svg>
//             </button>
//           </h2>
//           <div
//             id="accordion-color-body-1"
//             class="hidden"
//             aria-labelledby="accordion-color-heading-1"
//           >
//             <div class="p-5 border border-b-0 border-gray-200  text-black">
//               <p class="mb-2  text-black dark:text-gray-400">
//                 You can invite up to 2 additional users on the Free plan. There
//                 is no limit on team members for the Premium plan.
//               </p>
//             </div>
//           </div>
//           <h2 id="accordion-color-heading-2">
//             <button
//               type="button"
//               class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  text-black border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
//               accordion-target="#accordion-color-body-2"
//               aria-expanded="false"
//               aria-controls="accordion-color-body-2"
//             >
//               <span>What is the maximum file upload size?</span>
//               <svg
//                 accordion-icon
//                 class="w-3 h-3 rotate-180 shrink-0"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 10 6"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M9 5 5 1 1 5"
//                 />
//               </svg>
//             </button>
//           </h2>
//           <div
//             id="accordion-color-body-2"
//             class="hidden"
//             aria-labelledby="accordion-color-heading-2"
//           >
//             <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
//               <p class="mb-2  text-black dark:text-gray-400">
//                 No more than 2GB. All files in your account must fit your
//                 allotted storage space.
//               </p>
//             </div>
//           </div>
//           <h2 id="accordion-color-heading-3">
//             <button
//               type="button"
//               class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  text-black border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
//               accordion-target="#accordion-color-body-3"
//               aria-expanded="false"
//               aria-controls="accordion-color-body-3"
//             >
//               <span>
//                 What are the differences between Flowbite and Tailwind UI?
//               </span>
//               <svg
//                 accordion-icon
//                 class="w-3 h-3 rotate-180 shrink-0"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 10 6"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M9 5 5 1 1 5"
//                 />
//               </svg>
//             </button>
//           </h2>
//           <div
//             id="accordion-color-body-3"
//             class="hidden"
//             aria-labelledby="accordion-color-heading-3"
//           >
//             <div class="p-5 border border-t-0 border-gray-200">
//               <p class="mb-2  text-black dark:text-gray-400 ">
//                 The main difference is that the core components from Flowbite
//                 are open source under the MIT license, whereas Tailwind UI is a
//                 paid product. Another difference is that Flowbite relies on
//                 smaller and standalone components, whereas Tailwind UI offers
//                 sections of pages.
//               </p>
//               <p class="mb-2  text-black dark:text-gray-400">
//                 However, we actually recommend using both Flowbite, Flowbite
//                 Pro, and even Tailwind UI as there is no technical reason
//                 stopping you from using the best of two worlds.
//               </p>

//             </div>
//           </div>
//         </div>
//       </div>
