import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils.js/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
  };

  return (
    <div>
      <ul className="flex flex-wrap h-72">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            {" "}
            <VideoCard info={video} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default VideoContainer;
