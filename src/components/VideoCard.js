import React from "react";
import { formatCount } from "../utils/helper";
import moment from "moment";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;
  // console.log("snippet", snippet);

  return (
    <div className="w-[400px] m-2 p-2">
      <img
        src={
          thumbnails?.maxres?.url !== undefined
            ? thumbnails?.maxres?.url
            : thumbnails?.medium?.url
        }
        alt="thumbnail"
        className="rounded-lg w-[384px] h-[216px]"
      />
      <p className="truncate">{title}</p>
      <p className="font-bold">{channelTitle}</p>
      <div className="flex items-center">
        <p>{formatCount(viewCount)} views</p>
        <p className="mx-1 text-sm">•</p>
        <p>{moment(publishedAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default VideoCard;
