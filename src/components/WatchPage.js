import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, watchPageOpen } from "../utils.js/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import Channel from "./Channel";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils.js/constants";
import WatchPageDescription from "./WatchPageDescription";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState();
  const dispatch = useDispatch();
  console.log(videoDetails);
  const vid = searchParams.get("v");

  useEffect(() => {
    getVideos(vid);
    dispatch(watchPageOpen());
  }, []);

  const getVideos = async (vid) => {
    const data = await fetch(YOUTUBE_VIDEO_DETAILS_API(vid));
    const json = await data.json();

    setVideoDetails(json?.items[0]);
  };
  if (videoDetails === undefined) return;
  const { snippet, statistics } = videoDetails;
  const { title, channelTitle } = snippet;

  console.log(snippet, statistics);
  return (
    <div>
      <div className="flex m-2 mt-4 rounded-sm  ">
        <div className=" ">
          <iframe
            className="rounded-md shadow-lg shadow-black"
            width="1000"
            height="600"
            rel="0"
            defaultValue={"none"}
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?&theme=dark&autoplay=1&autohide=2&modestbranding=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <LiveChat />
      </div>

      <WatchPageDescription
        title={title}
        channelTitle={channelTitle}
        stats={statistics}
        description={snippet.description}
      />

      <Channel />
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
