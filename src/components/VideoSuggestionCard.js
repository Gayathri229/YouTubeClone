import React from "react";
import { formatCount } from "../utils/helper";
import moment from "moment";
import { useSelector } from "react-redux";

const VideoSuggestionCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;
  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  return (
    <div className="flex m-2">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="w-44 rounded-lg m-1"
      />
      <div className={"m-1 font-roboto " + (isDarkMode && "text-white")}>
        <p className="truncate whitespace-break-spaces line-clamp-2 text-[15px] font-[500] mb-1">
          {title}
        </p>
        <p className="text-xs opacity-70">{channelTitle}</p>
        <div className="flex items-center text-xs opacity-70 mt-1 ">
          <p>{formatCount(viewCount)} views</p>
          <p className="mx-1">•</p>
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSuggestionCard;
