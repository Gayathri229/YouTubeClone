import React, { useEffect, useState } from "react";
import { formatCount } from "../utils/helper";
import moment from "moment";
import { YOUTUBE_CHANNELS_API } from "../utils/constants";

const VideoCard = ({ info }) => {
  const [channelInfo, setChannelInfo] = useState([]);

  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle, publishedAt, channelId } = snippet;
  const { viewCount } = statistics;
  // console.log("snippet", info);

  useEffect(() => {
    fetchChannelInfo();
  }, [channelId]);

  const fetchChannelInfo = async () => {
    try {
      const channelName = await fetch(YOUTUBE_CHANNELS_API + channelId);
      const channelNameJson = await channelName.json();
      setChannelInfo(channelNameJson?.items?.[0]);
    } catch (error) {
      console.error("Error fetching channel info", error);
    }
  };

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
      <div className="my-3 flex">
        <img
          src={channelInfo?.snippet?.thumbnails?.high?.url}
          alt="channel profile"
          className="w-10 h-10 rounded-full mr-2"
        />

        <div className="truncate font-roboto">
          <p className="truncate font-semibold">{title}</p>
          <p className="">{channelTitle}</p>
          <div className="flex items-center text-[15px] opacity-70 relative -z-10">
            <p>{formatCount(viewCount)} views</p>
            <p className="mx-1 text-sm">•</p>
            <p>{moment(publishedAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
