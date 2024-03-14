import React, { useEffect, useState } from "react";
import { buildVideoApiUrl } from "../utils/constants";
import Shimmer from "./Shimmer";
import { formatCount } from "../utils/helper";
import useFetchChannelInfo from "../utils/useFetchChannelInfo";
import moment from "moment";
import { handleImageError } from "../utils/helper";

const SearchPageVideoCard = ({ info, query }) => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    // setVideoInfo();
    fetchVideoInfo();
  }, [query]);

  const { snippet, id } = info;
  const {
    thumbnails,
    title,
    channelTitle,
    description,
    publishedAt,
    channelId,
  } = snippet;
  const videoInfoUrl = buildVideoApiUrl(id?.videoId);
  const channelInfo = useFetchChannelInfo(channelId);

  // console.log("object length", Object.keys(info).length);

  // const setVideoInfo = async () => {
  //   const response = await fetchVideoInfo();
  //   setVideoData(response);
  // };

  const fetchVideoInfo = async () => {
    try {
      const data = await fetch(videoInfoUrl);
      //   const text = await data.text();
      const json = await data.json();
      setVideoData(json?.items);
    } catch (error) {
      console.error("Error fetching video info:", error);
    }
  };

  return (
    <div className="flex m-4 mx-16 px-4 sm:w-screen sm:my-2 sm:mx-0 sm:p-0 sm:rounded-none sm:flex-col">
      <img
        src={thumbnails?.high?.url}
        alt="thumbnail"
        className="rounded-lg w-[365px] h-[200px] sm:w-screen sm:h-[250px] sm:rounded-none"
      />
      <div className="mx-4 font-roboto sm:mx-2 sm:my-1">
        <p
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-lg sm:text-sm sm:line-clamp-2 "
        ></p>
        <div className="flex text-xs items-center opacity-70">
          <p className="mr-1">
            {formatCount(videoData?.[0]?.statistics?.viewCount)} views
          </p>
          <p>•</p>
          <p className="ml-1">{moment(publishedAt).fromNow()}</p>
        </div>
        <div className="flex items-center">
          <img
            src={channelInfo?.snippet?.thumbnails?.high?.url}
            alt="channel profile"
            className="w-8 h-8 mr-2 rounded-full"
            onError={handleImageError}
          />
          <p className="my-4 text-xs opacity-70 sm:my-2">{channelTitle}</p>
        </div>
        <p className="my-4 text-xs opacity-70 sm:hidden">{description}</p>
      </div>
    </div>
  );
};

export default SearchPageVideoCard;
