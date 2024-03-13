import { useState, useEffect } from "react";
import { YOUTUBE_CHANNELS_API } from "./constants";

const useFetchChannelInfo = (channelId) => {
  const [channelInfo, setChannelInfo] = useState([]);

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
  return channelInfo;
};

export default useFetchChannelInfo;
