import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { LuArrowDownToLine } from "react-icons/lu";
import { PiShareFatThin } from "react-icons/pi";

const WatchPageDescription = ({ channelTitle, title, stats, description }) => {
  console.log(stats, "st");
  //   const {likeCount , commentCount,viewCount}
  return (
    <div className="w-[62em] mt-4 mx-3 ">
      <h1 className=" font-bold  text-xl "> {title}</h1>
      <div className="flex items-center bg-gray-200  rounded-md justify-start mt-5">
        <div className="flex">
          <img
            className="mx-2 w-10 h-10 rounded-full"
            src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <div className="mx-2 ">
            <h3 className=" font-semibold">{channelTitle}</h3>
            <h4>{stats.viewCount}</h4>
          </div>
        </div>
        <button className="p-2 m-3 bg-gray-600 rounded-full">Subscribe</button>
        <div className="flex ml-48 gap-4 items-center  ">
          <BiLike
            className=" hover:bg-gray-400 border-l-0 hover:cursor-pointer rounded-full"
            size={"1.5em"}
          />
          <BiDislike
            className=" hover:bg-gray-400 border-l-0 hover:cursor-pointer rounded-full"
            size={"1.5em"}
          />
        </div>
        <p className="flex mx-8">
          <PiShareFatThin size={"1.5em"} />
          <p>Share</p>
        </p>
        <p className="flex mx-8">
          <LuArrowDownToLine size={"1.5em"} />
          <p>Download</p>
        </p>
        <button className="mx-8 flex items-center">
          {" "}
          <IoIosMore />
        </button>
      </div>

      <div className="border border-solid-black bg-gray-200 rounded-md mt-10">
        {description}
      </div>
    </div>
  );
};

export default WatchPageDescription;
