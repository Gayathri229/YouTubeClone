import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constants";
import CommentsList from "./CommentsList";

const CommentsContainer = ({videoId}) => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const fetchComments = async () => {
    const commentsData = await fetch(COMMENTS_API + videoId);
    const json = await commentsData.json();
    setCommentsList(json?.items);
  };

  return (
    <div className="m-4">
      <p className="font-semibold text-2xl">Comments:</p>
      <CommentsList comments={commentsList} />
    </div>
  );
};

export default CommentsContainer;
