import img2 from "../assets/Images/sec1i1.png";

import img3 from "../assets/Images/sec1i2.png";

import img4 from "../assets/Images/sec1i3.png";

import img5 from "../assets/Images/sec1i4.png";

const Footer = () => {
  return (
    <div className="relative md:max-w-[1200px] max-w-[350px] mx-auto py-20 max-md:pb-0 ">
      <div className=" relative   border-t-[0.5px] border-b-[0.5px]  border-white/20 ">
        <div className="relative  container flex flex-col z-100 px-10  ">
          <div className="flex max-md:flex-col flex-center    z-100  py-10 max-md:items-center ">
            <div className="flex flex-col mt-10 ">
              <div className="flex md:gap-8 gap-4 flex-center mt-4  max-md:justify-center">
                <img className="w-[40px] max-md:w-[30px]" src={img2} alt="" />
                <img className="w-[40px] max-md:w-[30px]" src={img5} alt="" />
                <img className="w-[40px] max-md:w-[30px]" src={img4} alt="" />
                <img className="w-[40px] max-md:w-[30px]" src={img3} alt="" />
              </div>
            </div>
          </div>
          <div className="flex-center md:gap-7 gap-3">
            <div className="md:text-xl text-base font-medium">HOME</div>
            <div className="md:w-[1px] md:h-[30px] h-[15px] md:pl-0 pl-[1px] md:opacity-[1] opacity-[0.7]  bg-[#fff]"></div>
            <div className="md:text-xl text-base font-medium">PRICING</div>
            <div className="md:w-[1px] md:h-[30px] h-[15px] md:pl-0 pl-[1px] md:opacity-[1] opacity-[0.7]  bg-[#fff]"></div>

            <div className="md:text-xl text-base font-medium">AUDIT</div>
            <div className="md:w-[1px] md:h-[30px] h-[15px] md:pl-0 pl-[1px] md:opacity-[1] opacity-[0.7]  bg-[#fff]"></div>

            <div className="md:text-xl text-base font-medium">KYC</div>
            <div className="md:w-[1px] md:h-[30px] h-[15px] md:pl-0 pl-[1px] md:opacity-[1] opacity-[0.7]  bg-[#fff]"></div>
            <div className="md:text-2xl text-base font-medium">DOCs</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 py-20 max-md:py-20">
            <div className="w[20px]">
              <hr className="w-[300px]" />
            </div>
            <div className="md:text-xl text-base">
              Copy Rights, DYOR PRO 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
