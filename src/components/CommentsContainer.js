import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constants";
import CommentsList from "./CommentsList";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const CommentsContainer = ({ videoId }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [showCommentsSmallScreen, setShowCommentsSmallScreen] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const fetchComments = async () => {
    const commentsData = await fetch(COMMENTS_API + videoId);
    const json = await commentsData.json();
    setCommentsList(json?.items);
  };

  return commentsList === undefined || commentsList === null ? (
    <div className="m-2 flex font-roboto text-sm justify-center">
      <span className="mr-1">Comments are turned off.</span>
      <Link
        to="https://support.google.com/youtube/answer/9706180?hl=en"
        className="text-blue-600"
      >
        <p>Learn more</p>
      </Link>
    </div>
  ) : (
    <div className="m-4 sm:m-2">
      <div className="flex items-center">
        <p className="font-semibold text-2xl sm:text-base">Comments</p>
        <IoMdArrowDropdown
          size={20}
          className="mt-1 ml-1 lg:hidden sm:inline"
          onClick={() => setShowCommentsSmallScreen(!showCommentsSmallScreen)}
        />
      </div>

      {/* {window.innerWidth < 640 && setShowCommentsSmallScreen(false)} */}

      <div className={showCommentsSmallScreen ? "sm:block" : "sm:hidden"}>
        <CommentsList comments={commentsList} />
      </div>
    </div>
  );
};

export default CommentsContainer;
