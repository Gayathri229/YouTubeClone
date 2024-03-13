import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {

  return comments.map((comment) => (
    <div key={comment?.id}>
      <Comment data={comment} />
    </div>
  ));
};

export default CommentsList;
