import { Grid1sec1 } from "./Section3/Heading";

import { Grid1sec2 } from "./Section3/MarketP";
import { Grid1sec3 } from "./Section3/SecterChart";
import { Grid2sec1 } from "./Section3/FGIndex";
import { Grid2sec2 } from "./Section3/AltIndex";
import { Grid2sec3 } from "./Section3/Partner";
import { Grid2sec4 } from "./Section3/Stats";

export const Section3 = () => {
  return (
    <div className="md:container max-w-[350px] md:py-0  py-0  md:pt-30 pt-30 ">
      <div className="grid grid-rows-2  ">
        <div className=" grid grid-cols-3 max-md:grid-cols-1">
          <Grid1sec1 />
          <Grid1sec2 />
          <Grid1sec3 />
        </div>
        <div className=" grid grid-cols-4 md:gap-2 gap-20 -mt-5 md:mx-0 mx-5 max-md:grid-cols-1 md:mt-15  ">
          <div className="w-[100%]">
            <Grid2sec1 />
          </div>
          <div className="w-[100%]">
            <Grid2sec2 />
          </div>
          <div className="w-[100%]">
            <Grid2sec3 />
          </div>
          <div className="w-[100%]">
            <Grid2sec4 />
          </div>
        </div>
      </div>
    </div>
  );
};
