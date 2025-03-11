import img2 from "../../../assets/Images/widi3.png";

export const Grid1sec2 = () => {
  return (
    <div>
      <div className="flex md:max-w-[100%]  md:mt-0 my-4 ">
        <img className="md:w-10 md:h-8 w-8" src={img2} alt="" />
        <h1 className="md:text-xl text-base ">MARKET PERFORMANCE(1D)</h1>
      </div>
      <div className="rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <table className="w-full border-separate border-spacing-y-3 border-spacing-x-5">
          <thead>
            <tr className="text-left text-white">
              <th className=" md:text-xs text-[10px]">Category</th>
              <th className=" w-[100%] md:text-xs text-[10px]">Market Cap</th>
              <th className=" w-[100%] md:text-xs text-[10px]">24h</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-white rounded-md">
              <td className="p-0 text-[#ba5f47] font-medium  md:text-xs text-[10px] ">
                Layer 2 (L2)
              </td>
              <td className=" p-1 border text-[#ba5f47] rounded-md   text-xs">
                23.3B
              </td>
              <td className="p-1 pr-18 border text-[#ba5f47] rounded-md   md:text-xs text-[10px] ">
                +0.01%
              </td>
            </tr>
            <tr className="text-white rounded-md">
              <td className="p-0 text-[rgb(96,228,201)] font-medium md:text-xs text-[10px]">
                Decentralized Finance (DeFi)
              </td>
              <td className=" p-1 border text-[#60e4c9] rounded-md  md:text-xs text-[10px]">
                133.8B
              </td>
              <td className="p-1 pr-18 border text-[#60e4c9] rounded-md   md:text-xs text-[10px]">
                -1.35%
              </td>
            </tr>
            <tr className="text-white rounded-md">
              <td className="p-0 text-[#1965eb] font-medium   md:text-xs text-[10px]">
                Gaming (GameFi)
              </td>
              <td className="p-1 border text-[#1965eb] rounded-md   md:text-xs text-[10px]">
                19.5B
              </td>
              <td className="p-1 pr-18 border text-[#1965eb] rounded-md  md:text-xs text-[10px]">
                -1.54%
              </td>
            </tr>
            <tr className="text-white rounded-md">
              <td className="p-0 text-[#648e49] font-medium   md:text-xs text-[10px]">
                Layer 1 (L1)
              </td>
              <td className="p-1 border text-[#648e49] rounded-md   md:text-xs text-[10px]">
                2.8T
              </td>
              <td className="p-1 pr-18 border text-[#648e49] rounded-md   md:text-xs text-[10px]">
                -1.97%
              </td>
            </tr>
            <tr className="text-white rounded-md">
              <td className="p-0 text-[#2be747] font-medium  md:text-xs text-[10px]">
                Meme
              </td>
              <td className=" p-1 border text-[#2be747] rounded-md   md:text-xs text-[10px]">
                98.9B
              </td>
              <td className="p-1 pr-18 border text-[#2be747] rounded-md   md:text-xs text-[10px]">
                -2.90%
              </td>
            </tr>
            <tr className="text-white rounded-md">
              <td className="p-0 text-[#d1403c] font-medium  md:text-xs text-[10px] w-[40%] ">
                Artificial Intelligence (AI)
              </td>
              <td className="p-1 border text-[#d1403c] rounded-md  w-[100%]  md:text-xs text-[10px]">
                36.4B
              </td>
              <td className="p-1 pr-18 border text-[#d1403c] rounded-md w-[10%]  md:text-xs text-[10px]">
                -4.10%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
