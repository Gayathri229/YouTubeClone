import React, { useEffect, useState, useRef } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import debounce from "lodash/debounce";

const useFetchVideos = () => {
  const [videos, setVideos] = useState([]);
  const pageTokenRef = useRef("");

  // useEffect(() => {
  //   fetchVideos();
  // }, []);

  // const fetchVideos = async () => {
  //   const data = await fetch(YOUTUBE_VIDEOS_API);
  //   const json = await data.json();
  //   setVideos(json?.items);
  // };

  // return videos;

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    let url = YOUTUBE_VIDEOS_API;

    if (pageTokenRef.current) {
      url += `&pageToken=${pageTokenRef.current}`;
    }
    // console.log("page token", pageTokenRef.current);

    try {
      const data = await fetch(url);
      const json = await data.json();
      setVideos((prevVideos) => {
        const newVideos = json?.items;

        const hasSameContent = prevVideos.every(
          (prevVideo, index) => prevVideo.id === newVideos[index].id
        );
        if (hasSameContent) {
          return [...newVideos];
        }

        // const existingVideoIds = new Set(prevVideos.map((video) => video.id));

        // const uniqueVideos = newVideos.filter(
        //   (video) => !existingVideoIds.has(video?.id)
        // );
        return [...prevVideos, ...newVideos];
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

  const debouncedHandleScroll = debounce(fetchVideos, 500);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      debouncedHandleScroll();
    }
  };

  return videos;
};

export default useFetchVideos;
