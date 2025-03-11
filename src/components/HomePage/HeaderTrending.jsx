import { useState, useEffect } from "react";
import axios from "axios";

import { Section2 } from "./Section2";

const CG_API_URL = "https://api.coingecko.com/api/v3/search/trending";
const CR_API_URL =
  "https://api.coinranking.com/v2/coins?x-access-token=coinranking03d639913e29db261e59382f0bcf08b40c774479a9349a63";

export const HeaderTrending = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [cgResponse, crResponse] = await Promise.all([
          axios.get(CG_API_URL),
          axios.get(CR_API_URL),
        ]);

        console.log("CoinGecko Data:", cgResponse.data);
        console.log("CoinRanking Data:", crResponse.data);

        // Transform CoinGecko data
        const cgTrending = {
          section: "CG TRENDING",
          tokens: cgResponse.data.coins.map((coin, index) => ({
            icon: coin.item.thumb, // PNG icon from CoinGecko
            rank: `#${index + 1}`,
            name: coin.item.name,
            symbol: coin.item.symbol,
            price: `$${coin.item.data.price.toFixed(4)}`,
            change: `${coin.item.data.price_change_percentage_24h.usd.toFixed(
              2
            )}%`,
            positive: coin.item.data.price_change_percentage_24h.usd >= 0,
            hot: index < 3, // Mark top 3 as "hot"
          })),
        };

        // Transform CoinRanking data (limit to top 20 coins)
        const crTrending = {
          section: "CR TRENDING",
          tokens: crResponse.data.data.coins
            .slice(0, 20)
            .map((coin, index) => ({
              icon: coin.iconUrl, // Directly using SVG URL from CoinRanking API
              rank: `#${index + 1}`,
              name: coin.name,
              symbol: coin.symbol,
              price: `$${parseFloat(coin.price).toFixed(4)}`,
              change: `${parseFloat(coin.change).toFixed(2)}%`,
              positive: parseFloat(coin.change) >= 0,
              hot: index < 3, // Mark top 3 as "hot"
            })),
        };

        setTrendingData([cgTrending, crTrending]);
      } catch (err) {
        console.error("Error fetching trending data:", err);
        setError("Failed to fetch trending data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingData();
  }, []);

  return (
    <div className="container flex flex-col gap-10">
      {loading && <p>Loading trending data...</p>}
      {error && <p className="error">{error}</p>}
      {!loading &&
        !error &&
        trendingData.map((sectionData, index) => (
          <Section2 key={index} data={sectionData} />
        ))}
    </div>
  );
};
