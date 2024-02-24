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
    console.log("Response", response);
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
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-lg"
      />
      <div className="mx-4">
        <p>{title}</p>
        <div className="flex font-semibold text-sm items-center">
          <p className="my-2 mr-1">
            {formatCount(videoData?.[0]?.statistics?.viewCount)} views
          </p>
          <p>•</p>
          <p className="my-2 ml-1">{moment(publishedAt).fromNow()}</p>
        </div>
        <p className="font-bold text-lg mt-2">{channelTitle}</p>
        <p className="mt-2 text-sm">{description}</p>
        <p>{}</p>
      </div>
    </div>
  );
};

export default SearchPageVideoCard;
