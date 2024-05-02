import React from "react";
import { BiUserCircle } from "react-icons/bi";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="mt-2 flex items-center bg-slate-400  h-9  ">
      <div>
        <BiUserCircle size={"2.5em"} />
      </div>
      <div>
        <span className="font-bold px-2 ">{name}</span>
        <span className="h-9 overscroll-contain">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
