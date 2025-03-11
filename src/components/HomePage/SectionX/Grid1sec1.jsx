import { Xresults } from "./Xresults";
import { Summarysec } from "./Summarysec";

export const Grid1sec1 = () => {
  return (
    <div className="relative max-w-[1280px] mx-auto col-span-3 ">
      <div className="relative   grid grid-rows-1 gap-1 max-md:grid-cols-1 md:px-5">
        <Summarysec />

        <Xresults />
      </div>
    </div>
  );
};
