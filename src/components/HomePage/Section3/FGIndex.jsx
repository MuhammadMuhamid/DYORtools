

import { useState, useEffect } from "react";
import widm from "../../../assets/Images/widmeter.png";

const RAPID_API_KEY = "840b0c868cmshbc6704bad6eacaap198655jsn6c618e898a7b";

export const FGIndex = () => {
  const [fearGreedData, setFearGreedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFearGreedIndex = async () => {
      try {
        const response = await fetch(
          "https://fear-and-greed-index.p.rapidapi.com/v1/fgi",
          {
            headers: {
              "x-rapidapi-host": "fear-and-greed-index.p.rapidapi.com",
              "x-rapidapi-key": RAPID_API_KEY,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `API error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setFearGreedData(data.fgi);
      } catch (error) {
        console.error("Error fetching Fear & Greed Index:", error);
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchFearGreedIndex();
  }, []);

  const getBarPosition = (valueText) => {
    const mapping = {
      "Extreme Fear": 10,
      Fear: 30,
      Neutral: 50,
      Greed: 70,
      "Extreme Greed": 90,
    };
    return mapping[valueText] || 50;
  };

  return (
    <div className="md:bg-[#0b0d21] border border-[#1d1c44] p-4 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between">
        {/* <div className="flex gap-1">
          <img src={widm} alt="Meter Icon" className="w-8 h-8 xl:-mt-2" />
          <h2 className="text-white font-semibold text-xs"></h2>
        </div> */}
        <div className=" flex gap-1">
          <img src={widm} alt="Icon" className="w-8 h-8 2xl:-mt-1 -mt-2" />
          <h2 className="2xl:text-sm  text-xs font-semibold">
            FEAR & GREED INDEX
          </h2>
        </div>
        <div className="">
          {loading ? (
            <p className="text-gray-400 text-xs">Loading...</p>
          ) : error ? (
            <p className="text-red-500 text-xs">{error}</p>
          ) : (
            <h1 className="flex  md:text-sm text-xs font-bold xl:-mt-2">
              <p className="text-green-500">
                {fearGreedData?.now?.value || "N/A"}{" "}
              </p>
              /100
            </h1>
          )}
        </div>
      </div>

      <div className="relative mt-3 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded">
        <div
          className="absolute top-0 h-2 w-2 bg-[#917ffb] from-red-500 to-[#917ffb] rounded"
          style={{ left: `${getBarPosition(fearGreedData?.now?.valueText)}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span className="text-red-500">Fear</span>
        <span>Neutral</span>
        <span className="text-green-500">Greed</span>
      </div>

      {/* Historical Values */}
      <div className="mt-4">
        <h3 className="text-gray-300 text-center md:text-sm text-xs">
          Historical Value
        </h3>
        <div className="flex justify-between mt-2 text-gray-400 text-sm">
          <div className="text-center">
            <p className="text-green-400 md:text-lg   text-xs font-bold">
              {" "}
              {fearGreedData?.now?.value || "N/A"}
            </p>
            <p>24h ago</p>
          </div>
          <div className="md:w-[1px] md:h-[50px] md:opacity-[0.7] bg-[#8b82a5]"></div>
          <div className="text-center">
            <p className="text-green-400 md:text-lg   text-xs font-bold">
              {fearGreedData?.oneWeekAgo?.value || "N/A"}
            </p>
            <p>7d ago</p>
          </div>
          <div className="md:w-[1px] md:h-[50px] md:opacity-[0.7] bg-[#8b82a5]"></div>
          <div className="text-center">
            <p className="text-green-400 md:text-lg  text-xs font-bold">
              {" "}
              {fearGreedData?.oneMonthAgo?.value || "N/A"}
            </p>
            <p>1m ago</p>
          </div>
          <div className="md:w-[1px] md:h-[50px] md:opacity-[0.7] bg-[#8b82a5]"></div>
          <div className="text-center">
            <p className="text-green-400 md:text-lg  text-xs font-bold">
              {fearGreedData?.oneYearAgo?.value || "N/A"}
            </p>
            <p>1y ago</p>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* 
      <div className="mt-6">
        <h3 className="text-gray-300 text-center text-xs">Historical Value</h3>
        <div className="flex justify-between mt-2 text-gray-400 text-xs">
          {["now", "oneWeekAgo", "oneMonthAgo", "threeMonthsAgo"].map(
            (key, index) => (
              <div key={index} className="text-center">
                <p className="text-green-400 font-bold">
                  {fearGreedData?.[key]?.value || "N/A"}
                </p>
                <p>
                  {key === "now"
                    ? "24h ago"
                    : key === "oneWeekAgo"
                    ? "7d ago"
                    : key === "oneMonthAgo"
                    ? "1m ago"
                    : "3m ago"}
                </p>
              </div>
            )
          )}
        </div>
      </div> */}
    </div>
  );
};
