import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  return (
    <div>
      <button
        className={
          "px-4 py-1 m-1 pt-[6px] text-sm font-semibold rounded-lg whitespace-nowrap " +
          (isDarkMode
            ? "bg-white bg-opacity-15 hover:bg-opacity-25 opacity-80"
            : "bg-black bg-opacity-5 hover:bg-opacity-10 opacity-70")
        }
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
