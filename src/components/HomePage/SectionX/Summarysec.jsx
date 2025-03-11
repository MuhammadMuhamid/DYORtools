export const Summarysec = () => {
  return (
    <section className=" text-gray-300 p-6 rounded-lg   ">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center  sm:items-start gap-8 ">
        <h2 className=" text-xl font-bold sm:w-1/4">SUMMARY</h2>

        <div className="flex flex-col sm:flex-row w-full justify-between text-center md:gap-0 gap-6">
          {/* Total Tweets */}
          <div className="flex-1  ">
            <p className="text-xs uppercase tracking-widest">
              Total Number of <br /> Tweets
            </p>
            <p className="md:text-2xl text-lg font-bold md:mt-0 mt-2">0000</p>
          </div>
          <div className="hidden sm:block w-px bg-gray-500"></div>{" "}
          {/* Divider */}
          {/* Positive Tweets */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest">
              Number of Positive Tweets
            </p>
            <p className="md:text-2xl text-lg font-bold md:mt-0 mt-2">0000</p>
          </div>
          <div className="hidden sm:block w-px bg-gray-500"></div>{" "}
          {/* Divider */}
          {/* Negative Tweets */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest">
              Number of Negative Tweets
            </p>
            <p className="md:text-2xl text-lg font-bold md:mt-0 mt-2">0000</p>
          </div>
        </div>
      </div>
    </section>
  );
};
