import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import img2 from "../../../assets/Images/widi3.png";

const API_KEY = "4a08f352-b385-48cc-b705-0740bb093214";
const API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories";

export const SecterChart = () => {
  const colors = {
    MEME: "#00ff00",
    L1: "#99ff99",
    DEFI: "#00ffff",
    L2: "#ff66ff",
    GAMING: "#3399ff",
    AI: "#ff3366",
  };

  const categoryMapping = {
    "Layer 2": "L2",
    DeFi: "DEFI",
    Gaming: "GAMING",
    "Layer 1": "L1",
    Memes: "MEME",
    "AI & Big Data": "AI",
  };

  const [data, setData] = useState([]);
  const [visibleLines, setVisibleLines] = useState(Object.keys(colors));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: { "X-CMC_PRO_API_KEY": API_KEY },
        });
        const result = await response.json();

        if (result.data) {
          const filteredData = result.data.filter((item) =>
            Object.keys(categoryMapping).includes(item.name)
          );

          // Custom Dates Matching the Image
          const customDates = [
            "03.05",
            "03.06",
            "03.07",
            "03.08",
            "03.09",
            "03.10",
            "03.11",
          ];

          const aggregatedData = customDates.map((date) => {
            let entry = { date };
            filteredData.forEach((item) => {
              const categoryKey = categoryMapping[item.name];

              // Ensure numeric values and prevent NaN errors
              let value = item.market_cap_change;
              entry[categoryKey] = typeof value === "number" ? value : 0;
            });

            return entry;
          });

          setData(aggregatedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleLine = (sector) => {
    setVisibleLines((prev) =>
      prev.includes(sector)
        ? prev.filter((s) => s !== sector)
        : [...prev, sector]
    );
  };

  return (
    <div className="rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      {/* Chart Header */}
      <div className="flex items-center w-full md:my-0 my-4">
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
            <span className="text-white md:text-xs text-[8px]">{key}</span>
            <label className="relative inline-flex items-center cursor-pointer">
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
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              tick={{ fill: "#535e80" }}
              ticks={[
                "03.05",
                "03.06",
                "03.07",
                "03.08",
                "03.09",
                "03.10",
                "03.11",
              ]}
            />
            <YAxis
              tick={{ fill: "#535e80" }}
              domain={[10, -10]}
              tickFormatter={(value) => Math.round(value)}
            />
            <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
            {visibleLines.map((key) => (
              <Line
                key={key}
                type="monotone"
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
