import React, { useState } from "react";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const buttonNameList = [
    "All",
    "Games",
    "Music",
    "Live",
    "Comedy",
    "Movies",
    "Gadgets",
    "News",
    "Computer programming",
    "Culinary arts",
    "Tamil Cinema",
    "Mixes",
    "New to you",
    "Recently uploaded",
    "Trending",
  ];

  const handleScroll = (scrollOffset) => {
    const slider = document.getElementById("videoCategories");
    slider.scrollLeft = slider.scrollLeft + scrollOffset;
  };

  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  return (
    <div className="flex mb-5 mx-8 items-center sm:w-full sm:mx-0">
      <div>
        <FaChevronLeft
          size={15}
          onClick={() => {
            handleScroll(-300);
          }}
          className={
            "text-[#A9A9A9] my-2 mr-2 hover:scale-110 hover:text-black " +
            (isDarkMode && " text-white hover:text-white hover:scale-110")
          }
        />
      </div>
      <div
        className="flex overflow-hidden scroll-smooth items-center font-roboto"
        id="videoCategories"
      >
        {buttonNameList.map((buttonName) => (
          <Button name={buttonName} key={buttonName} />
        ))}
      </div>
      <div>
        <FaChevronRight
          size={15}
          onClick={() => {
            handleScroll(300);
          }}
          className={
            "text-[#A9A9A9] my-2 ml-2 hover:scale-110 hover:text-black " +
            (isDarkMode && " text-white hover:text-white hover:scale-110")
          }
        />
      </div>
    </div>
  );
};

export default ButtonList;
