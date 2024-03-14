import React, { useEffect, useState } from "react";
import { formatCount } from "../utils/helper";
import moment from "moment";
import { YOUTUBE_CHANNELS_API } from "../utils/constants";
import useFetchChannelInfo from "../utils/useFetchChannelInfo";
import { handleImageError } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle, publishedAt, channelId } = snippet;
  const { viewCount } = statistics;
  const channelInfo = useFetchChannelInfo(channelId);

  return (
    <div className="w-[400px] m-1 p-2 sm:w-screen sm:my-2 sm:mx-0 sm:p-0">
      <img
        src={
          thumbnails?.maxres?.url !== undefined
            ? thumbnails?.maxres?.url
            : thumbnails?.high?.url
        }
        alt="thumbnail"
        className="rounded-lg w-[384px] h-[216px] sm:w-screen sm:h-[230px] sm:rounded-none"
      />
      <div className="my-3 flex">
        <img
          src={channelInfo?.snippet?.thumbnails?.high?.url}
          alt="channel profile"
          className="w-10 h-10 rounded-full mr-2 sm:w-8 sm:h-8 sm:mx-2"
          onError={handleImageError}
        />

        <div className="truncate font-roboto">
          <p className="truncate font-semibold sm:text-sm">{title}</p>
          <p className="opacity-70 text-sm sm:text-xs">{channelTitle}</p>
          <div className="flex items-center text-sm opacity-70 sm:text-xs">
            <p>{formatCount(viewCount)} views</p>
            <p className="mx-1">•</p>
            <p>{moment(publishedAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
