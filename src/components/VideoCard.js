import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  console.log(info);
  const handleCard = () => {
    let className = "rounded-md h-72";
    if (isMenuOpen) {
      className += "p-3 mx-4 m-2 w-96";
    } else {
      className += "p-2 mx-4 m-2 w-[300px]";
    }
    return className;
  };

  useEffect(() => {}, []);

  return (
    <div className={handleCard()}>
      <img className="rounded-lg w-full" src={thumbnails.medium.url} alt="" />
      <div>
        <h1 className={" h-12 font-bold text-wrap w-full overflow-hidden"}>
          {title}...
        </h1>
        <h2>{channelTitle}</h2>
        <p>{viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
