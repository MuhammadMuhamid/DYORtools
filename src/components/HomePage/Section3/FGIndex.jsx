import img1 from "../../../assets/Images/widmeter.png";
import img2 from "../../../assets/Images/widgetbar1.png";

export const Grid2sec1 = () => {
  return (
    <div className="md:bg-[#0b0d21] border-1 border-[#1d1c44] p-4 rounded-2xl shadow-lg ">
      {/* Header */}
      <div className="flex items-center justify-between space-x-2">
        <div className="flex gap-1">
          <img
            src={img1}
            alt="Meter Icon"
            className="w-8 h-8 2xl:-mt-1 -mt-2"
          />
          <h2 className="text-white font-semibold 2xl:text-sm   text-xs">
            FEAR & GREED INDEX
          </h2>
        </div>
        <div className="xl:-mt-2">
          <h1 className="text-right  text-green-400 md:text-sm text-xs font-semibold">
            68<span className="text-gray-400">/100</span>
          </h1>
        </div>
      </div>

      {/* Meter Bar */}
      <div className="relative mt-1">
        <img src={img2} alt="Index Bar" className="w-full" />
        <div className="absolute top-0 left-[68%] transform -translate-x-1/2 -translate-y-1/2">
          {/* <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-300"></div> */}
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between text-sm text-gray-400 ">
        <span className="text-red-500 md:text-sm text-xs">Fear</span>
        <span className="md:text-sm text-xs">Neutral</span>
        <span className="text-green-500 md:text-sm text-xs">Greed</span>
      </div>

      {/* Score */}

      {/* Historical Values */}
      <div className="mt-4">
        <h3 className="text-gray-300 text-center md:text-sm text-xs">
          Historical Value
        </h3>
        <div className="flex justify-between mt-2 text-gray-400 text-sm">
          <div className="text-center">
            <p className="text-green-400 md:text-lg   text-xs font-bold">76</p>
            <p>24h ago</p>
          </div>
          <div className="md:w-[1px] md:h-[50px] md:opacity-[0.7] bg-[#8b82a5]"></div>
          <div className="text-center">
            <p className="text-green-400 md:text-lg   text-xs font-bold">71</p>
            <p>7d ago</p>
          </div>
          <div className="md:w-[1px] md:h-[50px] md:opacity-[0.7] bg-[#8b82a5]"></div>
          <div className="text-center">
            <p className="text-green-400 md:text-lg  text-xs font-bold">67</p>
            <p>1m ago</p>
          </div>
          <div className="md:w-[1px] md:h-[50px] md:opacity-[0.7] bg-[#8b82a5]"></div>
          <div className="text-center">
            <p className="text-green-400 md:text-lg  text-xs font-bold">61</p>
            <p>3m ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};
