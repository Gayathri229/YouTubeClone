import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  YOUTUBE_VIDEO_PLAYER_API,
  YOUTUBE_CHANNELS_API,
} from "../utils/constants";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import moment from "moment";
import CommentsContainer from "./CommentsContainer";
import { formatCount } from "../utils/helper";
import LiveChat from "./LiveChat";
import WatchPageVideoSuggestions from "./WatchPageVideoSuggestions";
import { hideShortMenu } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [player, setPlayer] = useState();
  const [channelInfo, setChannelInfo] = useState();
  const [showMore, setShowMore] = useState(false);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const displayShortMenu = useSelector((store) => store.app.displayShortMenu);
  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  useEffect(() => {
    dispatch(closeMenu());
    // dispatch(hideShortMenu());
    fetchVideo();
  }, [videoId]);

  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_PLAYER_API + videoId);
    const json = await data.json();
    setPlayer(json?.items);
    
    const channelName = await fetch(
      YOUTUBE_CHANNELS_API + json?.items?.[0]?.snippet?.channelId
    );
    const channelNameJson = await channelName.json();
    setChannelInfo(channelNameJson?.items);
  };

  return (
    <div className="w-full">
      <div className="flex">
        <div className="flex flex-col w-[900px] mt-[72px] m-10 ml-14">
          <div className="flex">
            <div className="">
              <iframe
                width="900"
                height="500"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                className="rounded-2xl"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            {/* <div className="w-full h-[500px]">
          <LiveChat />
        </div> */}
          </div>

          <div className="font-roboto">
            <div>
              <p className="font-bold text-xl py-1 m-2">
                {player?.[0]?.snippet?.title}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex justify-center">
                  <div className="flex items-center">
                    <img
                      src={channelInfo?.[0]?.snippet?.thumbnails?.high?.url}
                      alt="channel name"
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <div className="flex flex-col px-2 mx-2">
                      <p className="font-semibold text-[17px] ">
                        {player?.[0]?.snippet?.channelTitle}
                      </p>
                      <p className="text-xs opacity-70">
                        {formatCount(
                          channelInfo?.[0]?.statistics?.subscriberCount
                        )}
                        subscribers
                      </p>
                    </div>
                  </div>
                  <button
                    className={
                      " rounded-full mx-2 px-4 h-10 font-semibold " +
                      (isDarkMode
                        ? " text-black bg-white"
                        : " text-white bg-black")
                    }
                  >
                    Subscribe
                  </button>
                </div>
                <div className="flex justify-center">
                  <div
                    className={
                      "flex items-center m-2  rounded-full " +
                      (isDarkMode ? "bg-white bg-opacity-10" : "bg-gray-100")
                    }
                  >
                    <button className="flex items-center rounded-l-full p-1 px-3 ">
                      <BiLike size={30} className="px-1" />
                      <p className="font-semibold">
                        {formatCount(player?.[0]?.statistics?.likeCount)}
                      </p>
                    </button>
                    <p className="text-lg">|</p>
                    <button className="rounded-r-full p-1 pl-2 pr-3 ">
                      <BiDislike size={30} className="px-1" />
                    </button>
                  </div>
                  <button
                    className={
                      "flex rounded-full px-2 items-center m-2 " +
                      (isDarkMode ? "bg-white bg-opacity-10" : "bg-gray-100")
                    }
                  >
                    <PiShareFatLight size={25} />
                    <p className="px-1 font-semibold">Share</p>
                  </button>
                  <button
                    className={
                      "flex rounded-full px-2 items-center m-2 " +
                      (isDarkMode ? "bg-white bg-opacity-10" : "bg-gray-100")
                    }
                  >
                    <LiaDownloadSolid size={25} className="" />
                    <p className="px-1 font-semibold">Download</p>
                  </button>
                  <button
                    className={
                      "flex rounded-full p-2 items-center m-2 px-3 " +
                      (isDarkMode ? "bg-white bg-opacity-10" : "bg-gray-100")
                    }
                  >
                    <IoEllipsisHorizontal size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={
                "mt-6 rounded-lg m-2 p-2 " +
                (isDarkMode ? "bg-white bg-opacity-10" : "bg-gray-100")
              }
            >
              <div className="flex">
                <p className="mx-2 font-semibold">
                  {formatCount(player?.[0]?.statistics?.viewCount)} views
                </p>
                <p className="font-semibold">
                  {moment(player?.[0]?.snippet?.publishedAt).fromNow()}
                </p>
              </div>
              <div className="m-2">
                <div className="truncate whitespace-pre-wrap font-semibold">
                  {showMore
                    ? player?.[0]?.snippet?.description
                    : player?.[0]?.snippet?.description.slice(0, 150)}
                </div>
                <button
                  className="cursor-pointer font-semibold my-2"
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  {showMore ? "Show less" : "...more"}
                </button>
              </div>
            </div>
          </div>
          <div className="comments">
            <CommentsContainer videoId={searchParams.get("v")}/>
          </div>
        </div>
        <div>
          <WatchPageVideoSuggestions videoId={searchParams.get("v")} />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
