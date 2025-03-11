// import { HeaderTrending } from "../components/HomePage/HeaderTrending";
// import { Section3 } from "../components/HomePage/Section3";
// import { Section1 } from "../components/HomePage/Section1";
// import { SectionX } from "../components/HomePage/SectionX";

// export const Home = () => {
//   return (
//     <div className=" ">
//       <div className="box2"></div>
//       <SectionX />

//       <Section1 />
//       <HeaderTrending />
//       {/* <Section2 /> */}
//       <Section3 />
//     </div>
//   );
// };

import { useState } from "react";
import { HeaderTrending } from "../components/HomePage/HeaderTrending";
import { Section3 } from "../components/HomePage/Section3";
import { Section1 } from "../components/HomePage/Section1";
import { SectionX } from "../components/HomePage/SectionX";

export const Home = () => {
  const [activeSection, setActiveSection] = useState("tradingInfo"); // Default to Section1

  return (
    <div className="relative xl:max-w-[1200px] xl:px-10 2xl:px-0 max-w-[350px] mx-auto ">
      <div className="absolute -z-10 h-[50px] w-full -top-8 bg-gradient-to-r  transform -translate-y-[0px] scale-[100%] from-[#9613f3] from-45% via-[#3681f7] to-[#0f5586] blur-[20px] opacity-200 "></div>

      {/* Right-side vertical buttons */}
      <div className="absolute  top-70 z-1 2xl:-right-12 xl:-right-3 flex flex-col gap-2 max-md:top-160 max-md:-right-0 ">
        <button
          className={`md:w-[50px] md:h-[160px] w-[20px] h-[100px]  md:rounded-r-3xl rounded-r-xl text-white font-bold md:text-xs flex flex-col text-[8px] items-center justify-center transition-all ${
            activeSection === "xResults"
              ? "bg-blue-700"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={() => setActiveSection("xResults")}
        >
          {/* {"STLUSER X".split("").map((letter, index) => ( */}
          {/* // <span key={index}>{letter}</span> */}
          <span className="lrr md:text-sm text-[8px]"> STLUSER X </span>
          {/* ))} */}
        </button>

        <button
          className={`md:w-[50px] md:h-[160px] w-[20px] h-[100px]  md:rounded-r-3xl rounded-r-xl text-white font-bold md:text-xs flex flex-col text-[8px] items-center justify-center transition-all ${
            activeSection === "tradingInfo"
              ? "bg-purple-700"
              : "bg-purple-500 hover:bg-purple-600"
          }`}
          onClick={() => setActiveSection("tradingInfo")}
        >
          <span className="lrr md:text-xs text-[8px]"> GNIDART OFNI </span>
        </button>
      </div>

      {/* Toggle Sections */}
      <div className="mt-4 ">
        {activeSection === "xResults" ? <SectionX /> : <Section1 />}
      </div>

      <HeaderTrending />
      <Section3 />
    </div>
  );
};
