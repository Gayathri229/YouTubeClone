import React, { useEffect, useRef, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import useFetchVideos from "../utils/useFetchVideos";

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  // const pageTokenRef = useRef("");
  const videoList = useFetchVideos();

  // useEffect(() => {
  //   fetchVideos();
  // }, []);

  // const fetchVideos = async () => {
  //   let url = YOUTUBE_VIDEOS_API;

  //   if (pageTokenRef.current) {
  //     url += `&pageToken=${pageTokenRef.current}`;
  //   }

  //   try {
  //     const data = await fetch(url);
  //     const json = await data.json();
  //     setVideos((prevVideos) => {
  //       const newVideos = json?.items;
  //       const hasSameContent = prevVideos.every(
  //         (prevVideo, index) => prevVideo.id === newVideos[index].id
  //       );
  //       if (hasSameContent) {
  //         return [...newVideos];
  //       }

  //       // const existingVideoIds = new Set(prevVideos.map((video) => video.id));

  //       // const uniqueVideos = newVideos.filter(
  //       //   (video) => !existingVideoIds.has(video?.id)
  //       // );
  //       return [...prevVideos, ...newVideos]; // prevVideos = 1-10 + 11-20
  //     });

  //     pageTokenRef.current = json?.nextPageToken;
  //   } catch (error) {
  //     console.error("Error fetching videos:", error);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // // const debounce = (func, delay) => {
  // //   let timeoutId;
  // //   return (...args) => {
  // //     clearTimeout(timeoutId);
  // //     timeoutId = setTimeout(() => {
  // //       func(...args);
  // //     }, delay);
  // //   };
  // // };

  // const debouncedHandleScroll = debounce(fetchVideos, 500);

  // const handleScroll = () => {
  //   const bottom =
  //     Math.ceil(window.innerHeight + window.scrollY) >=
  //     document.documentElement.scrollHeight;

  //   if (bottom) {
  //     debouncedHandleScroll();
  //   }
  // };

  return videoList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap w-full items-center mx-5 sm:flex-col sm:m-0 sm:justify-center">
      {videoList.map((video) => (
        <Link to={"watch?v=" + video.id} key={video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
