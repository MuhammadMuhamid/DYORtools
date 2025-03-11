import img1 from "../../../assets/Images/sec3bgh.png";

export const Heading = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10">
        <img src={img1} alt="" />
      </div>
      <div className="z-10 md:text-2xl text-lg md:px-9 md:py-7 px-5 py-6">
        SECTOR <br /> PERFORMANCE
      </div>
    </div>
  );
};
