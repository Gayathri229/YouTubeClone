import React from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { useSelector } from "react-redux";
import moment from "moment";
import { handleImageError } from "../utils/helper";

const CommentReplies = ({ data }) => {
  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  return (
    <div className="mx-2">
      <div className="flex items-start">
        <img
          src={data?.snippet?.authorProfileImageUrl}
          alt="user profile"
          className="w-8 h-8 rounded-full mt-4 sm:w-6 sm:h-6"
          onError={handleImageError}
        />
        <div className="flex flex-col m-3">
          <div className="flex items-center">
            <p className="font-semibold text-sm sm:text-xs">
              {data?.snippet?.authorDisplayName}
            </p>
            <p
              className={
                "text-black text-opacity-70 ml-2 text-xs font-medium " +
                (isDarkMode && "text-white")
              }
            >
              {moment(data?.snippet?.publishedAt).fromNow()}
            </p>
          </div>

          <p className="sm:text-sm">{data?.snippet?.textOriginal}</p>
          <div className="flex items-center">
            <div className="flex my-2 mr-5 items-center">
              <button className="mr-1">
                <BiLike size={20} />
              </button>
              <p>{data?.snippet?.likeCount > 0 && data?.snippet?.likeCount}</p>
            </div>
            <button className="my-2">
              <BiDislike size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentReplies;
