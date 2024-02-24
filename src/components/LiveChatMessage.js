import React from "react";
import { FaUserCircle } from "react-icons/fa";

const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="flex m-1 p-2">
      <FaUserCircle size={21} className="mr-2" />
      <p className="font-bold text-sm">{name}</p>
      <p className="ml-1 text-sm">{message}</p>
    </div>
  );
};

export default LiveChatMessage;
