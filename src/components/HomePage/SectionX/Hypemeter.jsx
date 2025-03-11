import meterImg from "../../../assets/Images/meter.png";
// import headerBtnBg from "../../../assets/Images/headerbtnbg.png";
import infosep from "../../../assets/Images/infosep.png";

export const Hypemeter = () => {
  return (
    <div className="w-[100%] md:ml-0 ml-5">
      <div className="flex flex-col mt-8   w-[100%]">
        {/* Hype Meter */}
        <div className="flex  flex-col text-center mb-6 ">
          <div className="relative bg-purple-700  text-white font-bold py-2 px-2 rounded-3xl mx-15">
            <p className="w-[100%]  py-2 rounded-3xl 2xl:text-xl text-base">
              HYPE METER
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <img src={meterImg} alt="Hype Meter" width={150} height={100} />
          </div>
          <p className="md:text-lg text-sm  text-gray-300 mt-6">
            X SENTIMENT SCORE
          </p>
          <img className=" py-4 px-15" src={infosep} alt="" />
          <p className="text-lg mt-3 ">0</p>
          <div className="flex gap-3 flex-center md:text-lg text-sm mt-5 ">
            <p>Negative</p>
            <p>Positive</p>
          </div>
        </div>
      </div>
    </div>
  );
};
