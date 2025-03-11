import img1 from "../../../assets/Images/widi3.png";

export const Grid2sec3 = () => {
  return (
    <div className="md:bg-[#0b0d21] border-1 border-[#1d1c44] text-white p-4 md:mt-0   rounded-2xl    ">
      <div className="flex flex-col  space-x-2 mb-3 gap-4">
        <div className="flex gap-1">
          <img src={img1} alt="icon" className="md:w-7 md:h-7 w-5 h-5" />
          <h2 className="2xl:text-lg xl:text-base text-xs font-bold">
            PARTNER IN FOCUS
          </h2>
        </div>

        <h3 className="text-[#C084FC] font-bold 2xl:text-xl 2xl:mt-0 xl:-mt-3 text-lg">
          SOLUS LABS
        </h3>
        <p className="text-gray-300 md:text-sm text-xs 2xl:mt-2 xl:-mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s.
        </p>
      </div>
    </div>
  );
};
