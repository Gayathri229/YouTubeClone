import React, { useState } from "react";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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

  return (
    <div className="flex my-4 mx-8 w-full items-center">
      <div>
        <FaChevronLeft
          size={15}
          onClick={() => {
            handleScroll(-300);
          }}
          className="text-[#A9A9A9] my-2 mr-2 hover:scale-110 cursor-pointer hover:text-black"
        />
      </div>
      <div className="flex overflow-hidden scroll-smooth items-center" id="videoCategories">
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
          className="text-[#A9A9A9] m-2 mx-4 hover:scale-110 cursor-pointer hover:text-black"
        />
      </div>
    </div>
  );
};

export default ButtonList;
