import img1 from "../../../assets/Images/widi4.png";
import img2 from "../../../assets/Images/stat2.png";

export const Grid2sec4 = () => {
  return (
    <div className="md:bg-[#0b0d21] border-1 border-[#1d1c44] text-white p-4 rounded-2xl  shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={img1} alt="SOL Icon" className="w-6 h-6" />
          <span className="2xl:text-xl xl:text-base text-lg font-bold">
            SOLS
          </span>
          <p className="text-xs xl:text-[9px] text-gray-400">24H Price:</p>
          <p className="md:text-sm text-xs font-semibold text-pink-400">
            $0.64278
          </p>
          <p className="text-orange-500  md:text-sm text-xs">-6.2%</p>
        </div>
      </div>

      {/* Market Info */}
      <div className="mt-5 flex justify-between">
        <div>
          <p className="text-gray-400 2xl:text-sm text-xs">Market Cap</p>
          <p className="2xl:text-lg text-base font-bold">49.6M</p>
        </div>
        <div>
          <p className="text-gray-400 2xl:text-sm text-xs  ">Volume</p>
          <p className="2xl:text-lg text-base font-bold">$195.1K</p>
        </div>
        <div className=" xl:mt-2">
          <img
            src={img2}
            alt="Price Chart"
            className="md:w-full md:h-12 h-7 w-20"
          />
        </div>
      </div>

      {/* Line Chart */}

      {/* All Time High & Low */}
      <div className="mt-5">
        <div className="flex justify-between">
          <p className="text-gray-400 2xl:text-xs text-[10px]">All Time High</p>
          <p className="2xl:text-xs text-[10px] text-gray-400">Mar 10, 2024</p>
          <p className="2xl:text-xs text-[10px] font-bold"> $1.99</p>
          <p className="text-red-500 md:text-xs text-[10px]">-68.24%</p>
        </div>
        <div className="flex  mt-3 justify-between">
          <p className="text-gray-400 2xl:text-xs text-[10px]">All Time Low</p>
          <p className="2xl:text-xs text-[10px] text-gray-400">Dec 19, 2023</p>
          <p className="2xl:text-xs text-[10px] font-bold">$0.0238</p>
          <p className="text-green-500 2xl:text-xs text-[10px]">+265.49K%</p>
        </div>
      </div>
    </div>
  );
};
