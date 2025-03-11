import { Grid1sec1 } from "./SectionX/Grid1sec1";
import { Hypemeter } from "./SectionX/Hypemeter";
import bgimg from "./../../assets/Images/xresultsbgimg.png";

export const SectionX = () => {
  return (
    <div className="relative max-w-[1240px] mx-auto md:py-40 pt-20 md:mb-0 mb-20 ">
      <div className="md:absolute max-md:hidden  -z-1 -left-11 2xl:bottom-20 xl:bottom-26 2xl:w-[1280px] xl:w-[1200px]   ">
        <img className="" src={bgimg} alt="" />
      </div>
      <div className="grid z-10 grid-cols-4 gap-5 max-md:grid-cols-1 md:px-5   ">
        <Grid1sec1 />
        <Hypemeter />

        {/* <Grid1sec2 /> */}
      </div>
    </div>
  );
};
