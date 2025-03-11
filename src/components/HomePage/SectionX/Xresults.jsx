import { useState, useEffect } from "react";
import axios from "axios";
import xplogo from "../../../assets/Images/xpimg.png";
import meter from "../../../assets/Images/meter.png";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmcm9udGVuZC10ZWFtIiwiaXNzIjoiRFlPUi5haSAodGVzdGluZykifQ.iNNHwJOyDzCqT3SYmxiPLH8k9ffki3Grk_ojMrY0DUM";

const dummyTweets = Array(10).fill({
  authorName: "Loading...",
  authorUsername: "loading",
  text: "Fetching latest tweets...",
  credibilityScore: 0,
  sentiment: "neutral",
  tweetLink: "#",
});

export const Xresults = ({ coinName, ticker }) => {
  const [tweets, setTweets] = useState(dummyTweets);
  const [allTweets, setAllTweets] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedTweets, setExpandedTweets] = useState({});

  useEffect(() => {
    if (!coinName || !ticker) return;

    const fetchTweets = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://api.dgenpro.com/api/top-tweets",
          {
            params: { coinName, ticker },
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        const extractLink = (text) => {
          const match = text.match(/https?:\/\/[^\s]+/);
          return match ? match[0] : "#";
        };

        const processedTweets = response.data.tweets.map((tweet) => ({
          ...tweet,
          tweetLink: extractLink(tweet.text),
        }));

        setAllTweets(processedTweets);
        setTweets(
          processedTweets.length > 0 ? processedTweets.slice(0, 8) : dummyTweets
        );
      } catch (err) {
        console.error("Error fetching tweets:", err);
        setError("Failed to load tweets.");
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, [coinName, ticker]);

  const toggleReadMore = (index) => {
    setExpandedTweets((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleLoadMore = () => {
    setShowAll(true);
    setTweets(allTweets.length > 0 ? allTweets : dummyTweets);
  };

  return (
    <section className="md:p-5 rounded-xl">
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {tweets.slice(0, showAll ? tweets.length : 8).map((tweet, index) => (
          <div
            key={index}
            className="bg-[#070632] rounded-lg md:w-[100%] p-3 flex w-[313px]"
          >
            <div className="flex flex-col gap-2 w-[100%]">
              <div className="flex gap-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src={xplogo}
                  alt="Profile"
                />
                <div>
                  <p className="text-white font-bold 2xl:text-xs xl:text-[9px] text-xs">
                    {tweet.authorName}
                  </p>
                  <p className="text-gray-4002xl:text-xs xl:text-[9px] text-xs">
                    @{tweet.authorUsername}
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <p
                  className={`text-white 2xl:text-xs xl:text-[9px] text-xs mt-2 ${
                    expandedTweets[index] ? "" : "line-clamp-3"
                  }`}
                >
                  {tweet.text}
                </p>
                {tweet.text.length > 100 && (
                  <button
                    className="text-blue-400 text-xs mt-1 underline"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedTweets[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center w-[100%]">
              <h1 className="text-white text-[10px]">CREDIBILITY SCORE</h1>
              <img className="w-12 mt-2" src={meter} alt="Meter" />
              <h1 className="text-white text-[10px] mt-2">TONE</h1>
              <div className="flex gap-2 mt-1">
                <span
                  className={`text-[10px] px-1 py-1 rounded-lg ${
                    tweet.sentiment === "negative"
                      ? "bg-red-500 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  NEGATIVE
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-md ${
                    tweet.sentiment === "positive"
                      ? "bg-green-500 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  POSITIVE
                </span>
              </div>
            </div>
          </div>
        ))}

        {!showAll && (
          <button
            className="bg-[#3cb9eb] text-white my-10 mx-15  rounded-full text-center hover:bg-blue-700 transition"
            onClick={handleLoadMore}
          >
            See More
          </button>
        )}
      </div>
    </section>
  );
};
