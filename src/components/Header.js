import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import YouTubeLogo from "../images/youtube-logo-cropped-2.png";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  //here accessing the Slice, defaultly gives us the state of the slice as well

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const url =
      "https://corsproxy.org/?" +
      encodeURIComponent(YOUTUBE_SEARCH_API + searchQuery);
    const data = await fetch(url);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    // make an api call after every key stroke
    // but if the difference between each key stroke is < 200ms
    // decline the API call

    const timer = setTimeout(() => {
      //square brackets here represents accessing the property of an object using dynamic key. As searchQuery is present as key in the state of the slice
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    // is called when component unmounts(if dependency array is not present) or when value in dependency array changes
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  // const fetchSearchResults = () => {
  //   console.log("suggestion clicked");
  // };

  /**
   * key i =>
   * - render the component
   * - useEffect() will be called
   * - start timer -> make an API call after 200ms
   *
   *
   * key ip =>
   * - destroy the component(useEffect return method)
   * - re-render the component
   * - useEffect will be called
   * - starts another new timer -> make an API call after 200ms
   *
   *
   * if next key stroke is pressed in less than 200s, timer is cleared(as in return function) and component gets re-rendered again
   * and a new timer is setup
   */

  return (
    <div className="flex p-2 mx-2 items-center gap-2 justify-between">
      <div className="flex">
        <RxHamburgerMenu
          size={23}
          className=" mx-2 mr-4 cursor-pointer"
          onClick={() => handleToggleMenu()}
        />
        <img
          className="w-[110px] pb-2 cursor-pointer"
          alt="youtube-logo"
          src={YouTubeLogo}
        ></img>
        {/* https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png */}
      </div>
      <div className="flex justify-center mr-20">
        <div>
          <div className="flex relative">
            <input
              type="text"
              className="border border-gray-500 h-[40px] w-[600px] rounded-l-full p-1 pl-5 pb-1 text-lg"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              // onBlur={() => setShowSuggestions(false)}
            />
            {searchQuery.length > 0 && (
              <div className="absolute right-0 m-1 hover:bg-gray-50 hover:rounded-full p-1">
                <HiOutlineXMark
                  size={25}
                  onClick={clearSearch}
                  className="cursor-pointer"
                />
              </div>
            )}
          </div>

          <div>
            {showSuggestions && searchSuggestions.length > 0 && (
              <div className="relative shadow-lg">
                <ul className="absolute bg-white w-[600px] border border-gray-300 rounded-lg p-2 m-1 shadow-lg">
                  {searchSuggestions.map((suggestion) => (
                    <Link to={"/search?q=" + suggestion} key={suggestion}>
                      <li
                        className="flex m-2 py-1 hover:bg-gray-100 hover:rounded-sm cursor-pointer"
                        onClick={() => setShowSuggestions(false)}
                      >
                        <CiSearch size={21} className="mr-3 mt-[2px]" />
                        {suggestion}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <button className="border border-gray-500 bg-gray-200 rounded-r-full py-2 px-4 h-[40px]">
          <CiSearch size={23} />
        </button>
      </div>
      <div className="flex m-2 items-center">
        <MdOutlineDarkMode size={32} className="m-2" />
        <FaUserCircle size={30} className="m-2" />
      </div>
    </div>
  );
};

export default Header;
