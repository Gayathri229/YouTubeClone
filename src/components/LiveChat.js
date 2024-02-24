import React, { useEffect, useState } from "react";
import { generateRandomName, generateSentence } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import LiveChatMessage from "./LiveChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

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
    <>
      <div className="border border-black bg-slate-100 rounded-sm shadow-lg w-full h-[500px] ml-2 p-2 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <LiveChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div className="w-full border border-black m-2 rounded-sm">
        <form
          className="flex"
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
            className="w-[340px] p-2"
            type="text"
            placeholder="Chat..."
            value={liveMessage}
            onChange={(event) => {
              setLiveMessage(event.target.value);
            }}
          ></input>
          <button className="bg-slate-200 rounded-sm py-1 px-2 my-1 mx-2">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
