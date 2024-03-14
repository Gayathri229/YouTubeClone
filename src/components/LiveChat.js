import React, { useEffect, useState } from "react";
import { generateRandomName, generateSentence } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import LiveChatMessage from "./LiveChatMessage";
import { VscSend } from "react-icons/vsc";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({ name: generateRandomName(), message: generateSentence() })
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={
        "border  w-11/12 h-[570px] ml-2 mt-[75px] rounded-xl font-roboto sm:hidden " +
        (isDarkMode ? "border-white border-opacity-15" : "border-gray-300")
      }
    >
      <div
        className={
          "font-medium text-lg h-[50px] p-3 pl-5 border-b-[1px] " +
          (isDarkMode
            ? "border-b-white border-opacity-15"
            : "border-b-gray-300")
        }
      >
        Live chat
      </div>
      <div className="p-2 overflow-y-scroll flex flex-col-reverse h-[450px]">
        {chatMessages.map((c, i) => (
          <LiveChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div
        className={
          "w-full rounded-sm border-t-[1px] " +
          (isDarkMode
            ? "border-t-white border-opacity-15"
            : "border-t-gray-300")
        }
      >
        <form
          className="flex items-center"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(
              addMessage({
                name: "Gaai",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            className={
              "w-[370px] m-3 p-2 pl-3 rounded-full " +
              (isDarkMode ? "bg-white bg-opacity-15" : "bg-gray-100 ")
            }
            type="text"
            placeholder="Chat..."
            value={liveMessage}
            onChange={(event) => {
              setLiveMessage(event.target.value);
            }}
          ></input>
          <button className="p-2 m-2">
            <VscSend size={23} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
