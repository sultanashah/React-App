// App.js
// import "./App.css";
import React from "react";
import Accordion from "./Components/Accordion";
import { useState } from "react";
import Navbar from "./Components/Navbar";
// import images from "./images/womenimage.png";
import images from "./images/womenimage.png";
import images2 from "./images/illustration-box-desktop.png";

const App = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How many team members can I invite?",
      data: `You can invite up to 2 additional users on the Free plan. There is
      no limit on team members for the Premium plan.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "What is the maximum file upload size?",
      data: `No more than 2GB. All files in your account must fit your allotted
      storage space.`,
      isOpen: false,
    },

    {
      key: 3,
      title: "How do I reset my password?",
      data: `Click “Forgot password” from the login page or “Change password”
      from your profile page. A reset link will be emailed to you.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div>
      <Navbar />
      <div className="flex  sm:flex-col md:flex-row  p-2 m-8 rounded-md  bg-white">
        <img className="p-4" src={images} alt=""></img>
        <img className="p-4 absolute" src={images2} alt=""></img>
        <div className=" flex flex-col justify-between w-450  p-2 m-8 rounded-md  bg-white">
          <h2 className="text-2xl mb-2 mx-auto Text-black w-[440px] font-bold ">
            FAQ
          </h2>
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

// import React from "react";
// // import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import Navbar from "./Components/Navbar";
// import Task from "./Components/Task";
// import Accordion from "./Components/Accordion";

// // import Hero from './Components/Hero';

// function App() {
//   return (
//     <div>
//       {/* <Navbar /> */}
//       <Hero />
//       <Task />
//       <Accordion />
//       <Navbar />
//     </div>
//   );
// }

// export default App;
