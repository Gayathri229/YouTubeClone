import React from "react";
import { formatCount } from "../utils/helper";
import moment from "moment";

const VideoSuggestionCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="flex m-2">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="w-48 rounded-lg m-1"
      />
      <div className="m-1">
        <p className="truncate text-[16px] whitespace-break-spaces line-clamp-2 text-sm font-bold mb-1">
          {title}
        </p>
        <p className="text-sm font-semibold">{channelTitle}</p>
        <div className="flex items-center">
          <p>{formatCount(viewCount)} views</p>
          <p className="mx-1 text-sm">•</p>
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSuggestionCard;
