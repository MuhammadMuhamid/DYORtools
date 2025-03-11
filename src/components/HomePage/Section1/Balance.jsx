import meterImg from "../../../assets/Images/meter.png";
import headingIcon from "../../../assets/Images/headingicon.png";
import infosep from "../../../assets/Images/infosep.png";

export const Grid1sec2 = () => {
  return (
    <div className="bg-[#0c0c2d] md:w-[100%] w-[330px] text-white md:px-7 md:py-15   rounded-4xl py-10 px-10   shadow-lg relative">
      {/* DYOR Balance */}
      <div className="flex gap-2">
        <div className="flex flex-col md:w-[80%] w-[100%] ">
          <div className="flex  items-center gap-3 mb-4">
            <div>
              <p className="md:text-md text-sm font-bold pb-3">
                $DYOR BALANCE:
              </p>
              <div className="border-1  py-2 px-2 md:w-[100%] w-[80%]  rounded-full flex items-center gap-2">
                <img
                  src={headingIcon}
                  alt="Heading Icon"
                  className="w-5 md:w-[30px]"
                />

                <p className="text-purple-400 md:text-2xl text-md font-bold">
                  100
                </p>
              </div>
              <p className="md:text-sm text-xs text-gray-400 mt-2 md:ml-2 ml-1">
                0.00 ETH | 0.00 $
              </p>
            </div>
          </div>
          {/* Summary Section */}
          <div className="flex flex-col gap-3 mt-8">
            <h3 className="md:text-lg text-md font-medium">SUMMARY</h3>
            <div className="mt-3">
              <p className=" md:text-xs text-[10px] text-gray-300">
                TOTAL NUMBER OF TWEETS
              </p>
              <p className="md:text-2xl text-lg font-medium mt-2">0000</p>
            </div>
            <div className="mt-3">
              <p className="md:text-xs text-[10px] text-gray-300">
                NUMBER OF POSITIVE TWEETS
              </p>
              <p className="md:text-2xl text-lg font-medium  mt-2">0000</p>
            </div>
            <div className="mt-3">
              <p className="md:text-xs text-[10px] text-gray-300">
                NUMBER OF NEGATIVE TWEETS
              </p>
              <p className="md:text-2xl text-lg font-medium mt-2">0000</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-12 w-[100%]">
          {/* Hype Meter */}
          <div className="text-center mb-6">
            <div className="relative text-white font-bold py-2 md:px-6 px-2 rounded-lg">
              <p className="bg-[#8b0db5] w-[100%] md:px-4 px-2 py-2 md:rounded-3xl rounded-xl 2xl:text-sm text-xs">
                HYPE METER
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img src={meterImg} alt="Hype Meter" className="md:w-30 w-25" />
            </div>
            <p className="md:text-sm text-xs  text-gray-300 mt-5">
              X SENTIMENT SCORE
            </p>
            <img className="md:ml-3 md:py-4 py-2" src={infosep} alt="" />
            <p className="text-lg ">0</p>
            <div className="flex gap-3 flex-center text-xs mt-2 ">
              <p>Negative</p>
              <p>Positive</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-1 space-y-3">
            <button className="w-[100%] md:text-sm text-xs flex-center border-white  border-1 py-2  rounded-xl">
              X RESULTS
            </button>
            <button className="w-[100%] md:text-sm text-xs flex-center border-white border-1 py-2 rounded-xl">
              TRADING INFO
            </button>
            <button className="w-[100%] md:text-sm text-xs flex-center border-white border-1 py-2 rounded-xl">
              GOOGLE TRENDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
