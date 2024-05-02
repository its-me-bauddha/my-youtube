import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils.js/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils.js/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessages] = useState();
  const dispatch = useDispatch();
  const Chats = useSelector((store) => store.chat.message);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="border mx-8 bg-gray-300 w-[23rem] flex  flex-col-reverse h-[38rem] rounded-lg overflow-y-scroll">
        <form
          className="w-[23rem]"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: ":unknown",
                message: liveMessage,
              })
            );
            setLiveMessages("");
          }}
        >
          <input
            className="bg-gray-200 h-12 w-[18rem]"
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessages(e.target.value)}
          />
          <button className="p-2 m-2 border bg-green-900 rounded-sm  ">
            Send
          </button>
        </form>
        <ul className=" h-[34rem]">
          {Chats.map((chat) => (
            <ChatMessage
              key={chat.name}
              name={chat.name}
              message={chat.message}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default LiveChat;
