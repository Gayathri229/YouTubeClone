import React, { useEffect, useRef, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const pageTokenRef = useRef("");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    let url = YOUTUBE_VIDEOS_API;

    if (pageTokenRef.current) {
      url += `&pageToken=${pageTokenRef.current}`;
    }
    console.log("page token", pageTokenRef.current);

    try {
      const data = await fetch(url);
      const json = await data.json();
      setVideos((prevVideos) => {
        const newVideos = json?.items;
        const existingVideoIds = new Set(prevVideos.map((video) => video.id));

        const uniqueVideos = newVideos.filter(
          (video) => !existingVideoIds.has(video?.id)
        );
        return [...prevVideos, ...uniqueVideos];
      });
      pageTokenRef.current = json?.nextPageToken;
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const debouncedHandleScroll = debounce(fetchVideos,500);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      debouncedHandleScroll();
    }
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap w-full items-center mx-5">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
