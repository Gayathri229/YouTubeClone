import React from "react";
import { FaUserCircle } from "react-icons/fa";

const commentsData = [
  { name: "Gayathri", text: "Lorem ipsum dimat bla bla bleh meh", replies: [] },
  {
    name: "Gayathri",
    text: "Lorem ipsum dimat bla bla bleh meh",
    replies: [
      {
        name: "Gayathri",
        text: "Lorem ipsum dimat bla bla bleh meh",
        replies: [
          {
            name: "Gayathri",
            text: "Lorem ipsum dimat bla bla bleh meh",
            replies: [
              {
                name: "Gayathri",
                text: "Lorem ipsum dimat bla bla bleh meh",
                replies: [],
              },
            ],
          },
        ],
      },
      { name: "Gayathri", text: "Lorem ipsum dimat bla bla", replies: [] },
      { name: "Gayathri", text: "Lorem ipsum dimat bla bla", replies: [] },
    ],
  },
  { name: "Gayathri", text: "Lorem ipsum dimat bla bla bleh meh", replies: [] },
  { name: "Gayathri", text: "Lorem ipsum dimat bla bla", replies: [] },
  { name: "Gayathri", text: "Lorem ipsum dimat bla bla", replies: [] },
  { name: "Gayathri", text: "Lorem ipsum dimat bla bla", replies: [] },
  { name: "Gayathri", text: "Lorem ipsum dimat bla bla", replies: [] },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="m-2 p-2 shadow-lg rounded-lg">
      <div className="username flex items-center">
        <FaUserCircle size={22} />
        <p className="p-2">{name}</p>
      </div>
      <p className="ml-8">{text}</p>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-4">
      Comments:
      {/* <Comment data={commentsData[0]} />; */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
