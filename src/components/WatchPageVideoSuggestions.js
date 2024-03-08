import React from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useFetchVideos from "../utils/useFetchVideos";
import VideoSuggestionCard from "./VideoSuggestionCard";

const WatchPageVideoSuggestions = ({ videoId }) => {
  const videoSuggestions = useFetchVideos();

  return videoSuggestions.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-8 mt-[72px]">
      {videoSuggestions.map((video) => (
        <Link to={"?v=" + video.id} key={video?.id}>
          {video.id !== videoId && <VideoSuggestionCard info={video} />}
        </Link>
      ))}
    </div>
  );
};

export default WatchPageVideoSuggestions;
