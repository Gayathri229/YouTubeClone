import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { buildVideoApiUrl } from "../utils/constants";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";
import moment from "moment";
import CommentsContainer from "./CommentsContainer";
import { formatCount } from "../utils/helper";
import LiveChat from "./LiveChat";
import WatchPageVideoSuggestions from "./WatchPageVideoSuggestions";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [player, setPlayer] = useState();
  const [searchParams] = useSearchParams();
  const videoUrl = buildVideoApiUrl(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const data = await fetch(videoUrl);
    const json = await data.json();
    setPlayer(json.items);
  };

  console.log(player);

  return (
    <div className="w-full">
      <div className="flex">
        <div className="flex flex-col w-[1000px]">
          <div className="flex">
            <div className="">
              <iframe
                width="1000"
                height="500"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
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

          <div>
            <div className="">
              <p className="font-bold text-2xl py-1 px-2 m-2">
                {player?.[0]?.snippet?.title}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex justify-center">
                  <div className="flex">
                    <p className="font-semibold text-xl px-2 mx-2">
                      {player?.[0]?.snippet?.channelTitle}
                    </p>
                    <button className="border border-black rounded-full px-4 py-[5px] font-semibold">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex items-center m-2">
                    <button className="flex items-center border border-gray-400 rounded-l-full p-1 pr-3">
                      <BiLike size={30} className="px-1" />
                      <p className="font-semibold">
                        {formatCount(player?.[0]?.statistics?.likeCount)}
                      </p>
                    </button>
                    <button className="border border-gray-400 rounded-r-full p-1 pl-3">
                      <BiDislike size={30} className="px-1" />
                    </button>
                  </div>
                  <button className="border border-gray-400 flex rounded-full px-2 items-center m-2">
                    <PiShareFatLight size={25} />
                    <p className="px-1">Share</p>
                  </button>
                  <button className="border border-gray-400 flex rounded-full px-2 items-center m-2">
                    <LiaDownloadSolid size={25} className="" />
                    <p className="px-1">Download</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="description flex">
              <p className="mx-2 font-semibold">
                {formatCount(player?.[0]?.statistics?.viewCount)} views
              </p>
              <p>{moment(player?.[0]?.snippet?.publishedAt).fromNow()}</p>
            </div>
            <div className="truncate">
              {player?.[0]?.snippet?.description}
            </div>
          </div>
          <div className="comments">
            <CommentsContainer />
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
