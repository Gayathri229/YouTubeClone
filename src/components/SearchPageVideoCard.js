import React, { useEffect, useState } from "react";
import { buildVideoApiUrl } from "../utils/constants";
import Shimmer from "./Shimmer";
import { formatCount } from "../utils/helper";
import moment from "moment";

const SearchPageVideoCard = ({ info, query }) => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    // setVideoInfo();
    fetchVideoInfo();
  }, [query]);

  const { snippet, id } = info;
  const { thumbnails, title, channelTitle, description, publishedAt } = snippet;
  const videoInfoUrl = buildVideoApiUrl(id?.videoId);

  const setVideoInfo = async () => {
    const response = await fetchVideoInfo();
    setVideoData(response);
  };

  const fetchVideoInfo = async () => {
    try {
      const data = await fetch(videoInfoUrl);
      //   const text = await data.text();
      //   console.log("DATA RESP"+ text);
      const json = await data.json();
      setVideoData(json?.items);
      //   return json?.items;
    } catch (error) {
      console.error("Error fetching video info:", error);
    }
  };

  return videoData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex m-2 p-2">
      <img
        src={
          thumbnails?.maxres?.url !== undefined
            ? thumbnails?.maxres?.url
            : thumbnails?.medium?.url
        }
        alt="thumbnail"
        className="rounded-lg w-[384px] h-[216px]"
      />
      <div className="mx-4 font-roboto">
        <p className="text-lg">{title}</p>
        <div className="flex text-xs items-center opacity-70">
          <p className="mr-1">
            {formatCount(videoData?.[0]?.statistics?.viewCount)} views
          </p>
          <p>•</p>
          <p className="ml-1">{moment(publishedAt).fromNow()}</p>
        </div>
        <p className="my-4 text-xs opacity-70">{channelTitle}</p>
        <p className="my-4 text-xs opacity-70">{description}</p>
        <p>{}</p>
      </div>
    </div>
  );
};

export default SearchPageVideoCard;
