import { Heading } from "./Section3/Heading";

import { MarketP } from "./Section3/MarketP";
import { SecterChart } from "./Section3/SecterChart";
import { FGIndex } from "./Section3/FGIndex";
import { AltIndex } from "./Section3/AltIndex";
import { Partner } from "./Section3/Partner";
import { Stats } from "./Section3/Stats";

export const Section3 = () => {
  return (
    <div className="md:container max-w-[350px] md:py-0  py-0  md:pt-30 pt-30 ">
      <div className="grid grid-rows-2  ">
        <div className=" grid grid-cols-3 max-md:grid-cols-1">
          <Heading />
          <MarketP />
          <Partner />
        </div>
        <div className=" grid grid-cols-4 md:gap-2 gap-20 -mt-5 md:mx-0 mx-5 max-md:grid-cols-1 md:mt-15  ">
          <div className="w-[100%]">
            <FGIndex />
          </div>
          <div className="w-[100%]">
            <AltIndex />
          </div>
          <div className="w-[100%]">
            <SecterChart />
          </div>
          <div className="w-[100%]">
            <Stats />
          </div>
        </div>
      </div>
    </div>
  );
};
