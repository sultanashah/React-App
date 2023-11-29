// Accordion.js

export default function Accordion(props) {
  return (
    <div className="border-solid border-b-2 rounded-md mb-1  ">
      <button
        className="w-full p-4 text-left font-bold text-black hover:font-bold hover:text-gray-200 dark:text-black
					 transition duration-300 border-solid "
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } 
								transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && <div className="p-4 bg-white">{props.data}</div>}
    </div>
  );
}































// import React from "react";
// // import img1 from "../images/womenimage.png";
// const Accordicon = () => {
//   return (
//     <>
//       <div class="bg-[#f2f2f2] p-5 w-full  h-[2300]  rounded-md flex justify-center items-center">
//         <div className="list">
//           <h1>FAQ</h1>
//           <div className="bg-[#e9e9e9] p-5 border boder-[#c9c6c655] rounded-md w-[280px] group is-active">
//             <div className=" flex items-center">
//               <div className="w-full group-[.is active]:font-bold">
//                 How many team members can I invite?
//               </div>
//               <div className="text-xl rotate-90 group-[.is-active]:rotate-[270deg]">
//                 >
//               </div>
//               <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] ">
//                 You can invite up to 2 additional users on the Free plan. There
//                 is no limit on team members for the Premium plan.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Accordicon;
