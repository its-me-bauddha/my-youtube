import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
      //API Polling
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className=" w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse ">
        <div>
          {chatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black "
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "harsh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[350px] px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-300 rounded-sm">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
