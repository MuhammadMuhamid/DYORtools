import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import img2 from "../../../assets/Images/widi3.png";

export const Grid1sec3 = () => {
  const colors = {
    MEME: "#00ff00",
    L1: "#99ff99",
    DEFI: "#00ffff",
    L2: "#ff66ff",
    GAMING: "#3399ff",
    AI: "#ff3366",
  };

  const data2 = [
    {
      date: "26.01",
      MEME: -2,
      L1: -1,
      DEFI: -1.5,
      L2: -3,
      GAMING: -2.5,
      AI: -4,
    },
    { date: "27.01", MEME: -5, L1: -3, DEFI: -2, L2: -6, GAMING: -4.5, AI: -7 },
    { date: "28.01", MEME: -8, L1: -5, DEFI: -4, L2: -9, GAMING: -7, AI: -10 },
    {
      date: "29.01",
      MEME: -10,
      L1: -7,
      DEFI: -6,
      L2: -12,
      GAMING: -9,
      AI: -13,
    },
    { date: "30.01", MEME: -6, L1: -3, DEFI: -2, L2: -5, GAMING: -4, AI: -8 },
    { date: "31.01", MEME: -3, L1: -1, DEFI: 0, L2: -2, GAMING: -1.5, AI: -5 },
    {
      date: "01.02",
      MEME: -12,
      L1: -9,
      DEFI: -8,
      L2: -14,
      GAMING: -11,
      AI: -16,
    },
  ];

  // Manage the visibility of each sector
  const [visibleLines, setVisibleLines] = useState(Object.keys(colors));

  // Toggle the visibility of a sector
  const toggleLine = (sector) => {
    setVisibleLines((prev) =>
      prev.includes(sector)
        ? prev.filter((s) => s !== sector)
        : [...prev, sector]
    );
  };

  return (
    <div className="rounded-lg shadow-lg w-full max-w-3xl mx-auto ">
      {/* Chart Header */}
      <div className="flex items-center w-full md:my-0 my-4 ">
        <img className="md:w-10 md:h-8 w-8" src={img2} alt="icon" />
        <h1 className="md:text-xl text-base text-white ml-2">
          SECTOR CHART (1W)
        </h1>
      </div>

      {/* Legend with Toggle Buttons */}
      <div className="flex flex-wrap md:flex-row flex-row items-center md:justify-start mt-8">
        {Object.keys(colors).map((key) => (
          <div key={key} className="flex items-center space-x-2 mb-2">
            <span
              className="w-2 h-2 rounded-full mr-1"
              style={{ backgroundColor: colors[key] }}
            ></span>
            <span className="text-white md:text-xs text-[8px] ">{key}</span>
            {/* Toggle Switch Button */}
            <label className="relative  inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={visibleLines.includes(key)}
                onChange={() => toggleLine(key)}
              />
              <div className="w-4 h-2 mr-1 bg-gray-600 rounded-full peer peer-checked:after:translate-x-2 peer-checked:bg-pink-500 after:content-[''] after:absolute after:top-0.2 after:-left-[0px] after:bg-white after:border after:rounded-full after:h-2 after:w-2 after:transition-all"></div>
            </label>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-4 -ml-10">
        <ResponsiveContainer width="100%" height={240} className="">
          <LineChart data={data2}>
            <XAxis dataKey="date" tick={{ fill: "#535e80" }} />
            <YAxis tick={{ fill: "#535e80" }} domain={[-24, 8]} />
            <Tooltip />

            {/* Render only the active lines */}
            {visibleLines.map((key) => (
              <Line
                key={key}
                type="showMark"
                dataKey={key}
                stroke={colors[key]}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
