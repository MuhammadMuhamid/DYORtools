import img1 from "../../../assets/Images/widmeter.png";
import img2 from "../../../assets/Images/widgetbar2.png";
import img3 from "../../../assets/Images/stat1.png";

export const AltIndex = () => {
  return (
    <div className="md:bg-[#0b0d21]  border-1 border-[#1d1c44] p-4 rounded-2xl  ">
      <div className="flex items-center justify-between space-x-2">
        <div className=" flex gap-1">
          <img src={img1} alt="Icon" className="w-8 h-8 2xl:-mt-1 -mt-2" />
          <h2 className="2xl:text-sm  text-xs font-semibold">
            ALTCOIN SEASON INDEX
          </h2>
        </div>

        <div className="text-right md:text-sm text-xs font-bold xl:-mt-2">
          <span className="text-[#8b90da]">59</span>
          <span className="text-gray-500">/100</span>
        </div>
      </div>

      <div className="relative w-full h-3 mt-1">
        <img src={img2} alt="Bar" className="w-full" />
      </div>
      <div className="flex justify-between md:text-sm text-xs text-gray-400 mt-2.5">
        <span className="text-[#f0bdfd]">Bitcoin Season</span>
        <span className="text-[#b1a2e4]">Altcoin Season</span>
      </div>
      <div className="2xl:mt-0 xl:mt-2">
        <img src={img3} alt="Bar" className="w-[100%]" />
      </div>
    </div>
  );
};
