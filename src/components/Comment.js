import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import moment from "moment";
import { useSelector } from "react-redux";
import CommentReplies from "./CommentReplies";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { handleImageError } from "../utils/helper";

const Comment = ({ data }) => {
  const [showReplies, setShowReplies] = useState(false);
  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);
  const { snippet, replies } = data;

  return (
    <div className="flex flex-col p-2">
      <div className="flex items-start">
        <img
          src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          alt="user profile"
          className="w-11 h-11 rounded-full mt-3 sm:w-8 sm:h-8"
          onError={handleImageError}
        />

        <div className="flex flex-col mx-3 mt-2">
          <div className="flex items-center">
            <p className="font-semibold text-sm sm:text-xs">
              {snippet?.topLevelComment?.snippet?.authorDisplayName}
            </p>
            <p
              className={
                "text-black text-opacity-70 ml-2 text-xs font-medium " +
                (isDarkMode && "text-white")
              }
            >
              {moment(snippet?.topLevelComment?.snippet?.publishedAt).fromNow()}
            </p>
          </div>

          <div className="sm:text-sm">
            {snippet?.topLevelComment?.snippet?.textOriginal}
          </div>
          <div className="flex items-center">
            <div className="flex my-2 mr-5 items-center">
              <button className="mr-1">
                <BiLike size={20} />
              </button>
              <p>
                {snippet?.topLevelComment?.snippet?.likeCount > 0 &&
                  snippet?.topLevelComment?.snippet?.likeCount}
              </p>
            </div>

            <button className="my-2">
              <BiDislike size={20} />
            </button>
          </div>
        </div>
      </div>
      {replies !== undefined && (
        <div className="ml-12">
          <button
            className="flex items-center p-1 px-3 text-[#065fd4] hover:bg-blue-300 hover:bg-opacity-15 min-w-[100px] h-[38px] rounded-full font-semibold"
            onClick={() => {
              setShowReplies(!showReplies);
            }}
          >
            <IoMdArrowDropdown size={20} className="" />
            <p className="inline-block whitespace-nowrap sm:text-sm">
              {replies.comments?.length > 1
                ? `${replies.comments?.length} replies`
                : `${replies.comments?.length} reply`}
            </p>
          </button>
          {showReplies &&
            replies?.comments?.map((reply) => (
              <div key={reply?.id}>
                <CommentReplies data={reply} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
