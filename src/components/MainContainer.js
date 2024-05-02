import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import store from "../utils.js/store";

const MainContainer = () => {
  const isDark = useSelector ((store) => store.app.isDark);
  return (
    <div className={`${isDark ? " bg-black text-white" : "bg-white"} `}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
