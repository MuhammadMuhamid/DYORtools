/* eslint-disable react/prop-types */

import Marquee from "react-fast-marquee";

import img1 from "../../assets/Images/sec2img1.png";

export const Section2 = ({ data }) => {
  return (
    <div className="flex flex-center  md:gap-4 gap-1    ">
      <div className="  sec2bg 2xl:w-[24%] xl:w-[24%] w-[45%] md:py-[18px] py-2  flex-center 2xl:text-base xl:text-sm text-[6px]">
        {data.section}
      </div>

      <div className="truncate w-[80%]  ">
        <Marquee>
          {data.tokens.map((token, idx) => (
            <div
              key={idx}
              className="flex items-center px-5 py-1 mx-2 gap-2 bg-[#1b1b22] rounded-full"
            >
              <span className="text-[#b3b3ff] md:text-base text-[8px]">
                {token.rank}
              </span>

              {/* Display the SVG/PNG icon properly */}
              <img
                src={token.icon}
                alt={token.name}
                className="token-icon md:w-4 w-2 md:text-base text-sm "
              />

              <span className="text-white font-bold md:text-base text-[8px]">
                {token.name}
              </span>
              {/* <span className="font-extralight">({token.symbol})</span> */}

              <span className="price-t md:text-base text-[8px]">
                {token.price}
              </span>
              <span
                className={`md:text-base text-[8px] change ${
                  token.positive ? "positive" : "negative"
                }`}
              >
                {token.change}
              </span>

              {/* Uncomment if you want to show "Hot Pairs" for top 3 tokens */}
              {/* {token.hot && <div className="hot-pairs">Hot Pairs</div>} */}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="md:w-[12%] w-[25%]  flex gap-2 rounded-full bg-[#7b12de] md:py-3 md:px-4 py-[4px] px-2   ">
        <img className="md:w-4 w-[5px] md:h-5 h-[5px]" src={img1} alt="" />

        <p className="md:text-sm text-[6px] text-[#000]">Hot Pairs</p>
      </div>
    </div>
  );
};

// export default Section2;
