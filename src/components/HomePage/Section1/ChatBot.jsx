import { useState, useEffect } from "react";
import axios from "axios";
import btn1 from "../../../assets/Images/gptbtn1.png";
import btn2 from "../../../assets/Images/gptbtn2.png";
import btn3 from "../../../assets/Images/gptbtnmain.png";
import headinglogo from "../../../assets/Images/headingicon.png";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmcm9udGVuZC10ZWFtIiwiaXNzIjoiRFlPUi5haSAodGVzdGluZykifQ.iNNHwJOyDzCqT3SYmxiPLH8k9ffki3Grk_ojMrY0DUM";

export const Grid1sec1 = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMessages([
        { text: "Ask me anything about crypto & my capabilities", type: "bot" },
      ]);
    }, 2000);
  }, []);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { text: userInput, type: "user" }]);
    setUserInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.dgenpro.com/api/chat",
        { query: userInput },
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMessages((prev) => [
        ...prev,
        { text: response.data.response, type: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "An error occurred. Please try again.", type: "bot" },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className=" max-w-[350px]  lg:max-w-[1200px]  inline bg-[#0c0c2d] rounded-4xl col-span-2">
      <div className="   rounded-4xl">
        <div className="flex flex-col justify-center rounded-4xl ">
          <div className="hbg md:py-8 py-4  rounded-t-4xl ">
            <div className=" flex items-center w-[100%] md:ml-18 ml-0 pl-7  mt-2">
              <div className=" z-2">
                <img
                  className="md:w-[70px] w-[40px]"
                  src={headinglogo}
                  alt="Heading"
                />
              </div>
              <div className="flex flex-col md:px-5 px-3">
                <div className="md:text-lg text-[10px]">Interact with</div>
                <div className="md:text-xl text-xs font-bold ">
                  SENTIMENT ANALYSIS DASHBOARD
                </div>
              </div>
            </div>
          </div>
          <div id="chat-container" className="">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}-message`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="message bot-message">Thinking...</div>}
          </div>
        </div>
        <hr className="solid h-[1px] opacity-[0.3]" />
        <div className="flex justify-around items-center">
          <input
            className="w-[100%] md:text-xl text-xs md:h-[65px] h-[35px] opacity-[0.5]  text-center"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Agent"
          />
          <div>
            <a href="#">
              <img className="md:w-8 w-5" src={btn1} alt="Button 1" />
            </a>
          </div>
          <div className="w-[2px] md:h-8 h-4 bg-[#8b82a5] mx-5"></div>
          <div>
            <a href="#">
              <img className="md:w-8 w-5" src={btn2} alt="Button 2" />
            </a>
          </div>
          <div className="md:ml-12 md:mr-24 mr-12 ml-5 ">
            <a className="" onClick={sendMessage}>
              <img className="md:w-[60px] w-[40px]" src={btn3} alt="Send" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
