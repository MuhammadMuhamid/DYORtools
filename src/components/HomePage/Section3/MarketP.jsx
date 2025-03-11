import { useEffect, useState } from "react";
import img2 from "../../../assets/Images/widi3.png";

export const MarketP = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories",
          {
            headers: {
              "X-CMC_PRO_API_KEY": "4a08f352-b385-48cc-b705-0740bb093214",
            },
          }
        );
        const data = await response.json();
        if (data.status.error_code === 0) {
          setCategories(data.data);
        }
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  const categoryMapping = {
    "Layer 2 (L2)": "Layer 2",
    "Decentralized Finance (DeFi)": "DeFi",
    "Gaming (GameFi)": "Gaming",
    "Layer 1 (L1)": "Layer 1",

    Meme: "Memes",
    "Artificial Intelligence (AI)": "AI & Big Data",
  };

  const filteredCategories = Object.keys(categoryMapping)
    .map((key) => {
      const category = categories.find(
        (c) => c.name.toLowerCase() === categoryMapping[key].toLowerCase()
      );
      return category
        ? {
            name: key,
            market_cap: category.market_cap
              ? `$${(category.market_cap / 1e9).toFixed(1)}B`
              : "N/A",
            change_24h: category.avg_price_change
              ? `${category.avg_price_change.toFixed(2)}%`
              : "N/A",
            color: getColor(key),
          }
        : null;
    })
    .filter(Boolean);

  function getColor(category) {
    const colors = {
      "Layer 2 (L2)": "#ba5f47",
      "Decentralized Finance (DeFi)": "#60e4c9",
      "Gaming (GameFi)": "#1965eb",
      "Layer 1 (L1)": "#648e49",
      Meme: "#2be747",
      "Artificial Intelligence (AI)": "#d1403c",
    };
    return colors[category] || "white";
  }

  return (
    <div>
      <div className="flex md:max-w-[100%] md:mt-0 my-4">
        <img className="md:w-10 md:h-8 w-8" src={img2} alt="Market" />
        <h1 className="md:text-xl text-base">MARKET PERFORMANCE (1D)</h1>
      </div>
      <div className="rounded-lg shadow-lg w-full max-w-lg mx-auto">
        <table className="w-full border-separate border-spacing-y-3 border-spacing-x-5">
          <thead>
            <tr className="text-left text-white">
              <th className="md:text-xs text-[10px]">Category</th>
              <th className="w-[100%] md:text-xs text-[10px]">Market Cap</th>
              <th className="w-[100%] md:text-xs text-[10px]">24h</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((cat) => (
              <tr key={cat.name} className="text-white rounded-md">
                <td
                  className={`p-0 font-medium md:text-xs text-[10px]`}
                  style={{ color: cat.color }}
                >
                  {cat.name}
                </td>
                <td
                  className={`p-1 border rounded-md md:text-xs text-[10px]`}
                  style={{ color: cat.color }}
                >
                  {cat.market_cap}
                </td>
                <td
                  className={`p-1 pr-18 border rounded-md md:text-xs text-[10px]`}
                  style={{ color: cat.color }}
                >
                  {cat.change_24h}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
