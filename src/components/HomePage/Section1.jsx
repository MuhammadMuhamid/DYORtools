import { Grid1sec1 } from "./Section1/ChatBot";
import { Grid1sec2 } from "./Section1/Balance";

export const Section1 = () => {
  return (
    <div className="max-w-[1280px] mx-auto md:py-30 py-20">
      <div className="grid grid-cols-3 md:gap-5 gap-3 max-md:grid-cols-1">
        <Grid1sec1 />

        <Grid1sec2 />
      </div>
    </div>
  );
};
