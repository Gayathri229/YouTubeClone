import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import YouTubeLogoDark from "../images/yt_logo_rgb_dark.png";
import YouTubeLogoLight from "../images/yt_logo_rgb_light.png";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { toggleDarkMode } from "../utils/darkModeSlice";
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { PiMoon } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";
import { MdMic } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import { PROXY_URL } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const searchBoxRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  //here accessing the Slice, defaultly gives us the state of the slice as well

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  const enableDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const getSearchSuggestions = async () => {
    try {
      const searchAPI = YOUTUBE_SEARCH_API + searchQuery;
      const url = PROXY_URL + searchAPI;
      const data = await fetch(url);
      const json = await data.json();
      setSearchSuggestions(json[1]);
      //update cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error(error);
    }
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

  const clearSearch = (event) => {
    setSearchQuery("");
    setShowSearchHistory(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setShowSuggestions(false);
    setSearchHistory([...searchHistory, suggestion]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log("search box ref", searchBoxRef.current);
      // console.log("Event target", event.target);
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target) &&
        !event.target.classList.contains("clearSearchButton") &&
        !event.target.classList.contains("clearSearchDiv")
      ) {
        // console.log("searchBoxRef", showSearchHistory);
        setShowSearchHistory(false);
        setShowSuggestions(false);
      }
    };

    if (showSearchHistory || showSuggestions) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showSearchHistory, showSuggestions]);

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
    <div
      className={
        "flex mx-2 py-1 px-2 items-center gap-2 justify-between fixed w-full z-10 sm:w-screen sm:pt-1 sm:mx-0 sm:justify-normal " +
        (isDarkMode ? " bg-black" : " bg-white")
      }
    >
      <div className="flex items-center">
        <div
          className={
            "mx-2 mr-4 p-2 hover:rounded-full sm:hidden " +
            (isDarkMode
              ? "hover:bg-white hover:bg-opacity-15"
              : "hover:bg-black hover:bg-opacity-10")
          }
        >
          <RxHamburgerMenu
            size={23}
            className={
              "box-border cursor-pointer " + (isDarkMode ? "text-white " : "")
            }
            onClick={() => handleToggleMenu()}
          />
        </div>
        <div className="">
          <img
            className="w-[100px] cursor-pointer "
            alt="youtube-logo"
            src={isDarkMode ? YouTubeLogoDark : YouTubeLogoLight}
          ></img>
        </div>
        {/* https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png */}
      </div>
      <div className="flex justify-center items-center ml-14 sm:m-0 sm:w-screen">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSearchQuery(event.target.querySelector("input").value);
            navigate(`/search?q=${searchQuery}`);
            handleSuggestionClick(searchQuery);
          }}
        >
          <div>
            <div
              className="flex relative searchBox sm:w-full"
              ref={searchBoxRef}
            >
              <input
                type="text"
                className={
                  "h-[40px] w-[580px] rounded-l-full p-1 pl-5 pb-1 text-[16px] border font-roboto sm:w-full " +
                  (isDarkMode
                    ? " bg-black text-white border-gray-800 focus:border-[#1c62b9]"
                    : " border-gray-300 focus:border-[#1c62b9]")
                }
                ref={inputRef}
                placeholder="Search"
                value={searchQuery}
                onClick={() => setShowSearchHistory(true)}
                onChange={(event) => setSearchQuery(event.target.value)}
                onFocus={() => setShowSuggestions(true)}
              />
              {searchQuery.length > 0 && (
                <div
                  className={
                    "clearSearchDiv absolute right-0 hover:rounded-full p-2 " +
                    (isDarkMode
                      ? "hover:bg-white hover:bg-opacity-25"
                      : "hover:bg-black hover:bg-opacity-10")
                  }
                  onClick={(event) => clearSearch(event)}
                >
                  <HiOutlineXMark
                    size={25}
                    className={
                      "clearSearchButton cursor-pointer " +
                      (isDarkMode && " text-white")
                    }
                  />
                </div>
              )}
            </div>

            {searchQuery.length > 0 ? (
              <div>
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="shadow-lg ">
                    <ul
                      className={
                        "absolute w-[580px] rounded-xl m-1 shadow-lg sm:w-screen sm:left-0 sm:right-0 sm:mx-0 sm:rounded-none " +
                        (isDarkMode ? "bg-[#222021] text-white" : "bg-white")
                      }
                    >
                      {searchSuggestions.map((suggestion) => (
                        <div
                          className={
                            isDarkMode
                              ? "hover:bg-white hover:bg-opacity-10"
                              : "hover:bg-gray-100"
                          }
                          key={suggestion}
                        >
                          <Link to={"/search?q=" + suggestion}>
                            <li
                              className={
                                "flex items-center m-2 p-1 px-2 cursor-pointer font-roboto "
                              }
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              <CiSearch size={21} className={"mr-3"} />
                              {suggestion}
                            </li>
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {showSearchHistory && searchHistory.length > 0 && (
                  <div className="shadow-lg ">
                    <ul
                      className={
                        "absolute w-[580px] rounded-xl m-1 shadow-lg sm:w-screen sm:left-0 sm:right-0 sm:mx-0 sm:rounded-none " +
                        (isDarkMode ? "bg-[#222021] text-white" : "bg-white")
                      }
                    >
                      {searchHistory.map((searchTerm) => (
                        <div
                          className={
                            isDarkMode
                              ? "hover:bg-white hover:bg-opacity-10"
                              : "hover:bg-gray-100"
                          }
                        >
                          <Link to={"/search?q=" + searchTerm} key={searchTerm}>
                            <li className="flex items-center m-2 p-1 cursor-pointer font-roboto">
                              <GoHistory size={20} className="mr-3" />
                              {searchTerm}
                            </li>
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </form>

        <button
          className={
            "border rounded-r-full py-2 px-5 h-[40px] " +
            (isDarkMode
              ? " bg-[#222021] border-gray-800"
              : " border-gray-300 hover:bg-gray-100")
          }
        >
          <IoIosSearch size={23} className={isDarkMode && " text-white"} />
        </button>
        <div
          className={
            "m-2 ml-4 rounded-full cursor-pointer sm:hidden " +
            (isDarkMode
              ? "bg-white bg-opacity-10 hover:bg-opacity-20"
              : "bg-black bg-opacity-5 hover:bg-opacity-10")
          }
        >
          <MdMic size={23} className={"m-2 " + (isDarkMode && "text-white")} />
        </div>
      </div>
      <div className="flex m-2 items-center sm:m-0">
        <div className="m-2 mx-3 cursor-pointer sm:hidden">
          <svg
            className="h-[26px] w-[26px]"
            viewBox="0 0 24 24"
            fill={isDarkMode ? "white" : "black"}
          >
            <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
          </svg>
        </div>
        <CiBellOn
          size={27}
          className={
            "m-2 mx-3 cursor-pointer sm:hidden " + (isDarkMode && "text-white")
          }
        />
        {isDarkMode ? (
          <IoSunnyOutline
            size={25}
            className={"m-2 mx-3 cursor-pointer text-white sm:mx-1"}
            onClick={() => {
              enableDarkMode();
            }}
          />
        ) : (
          <PiMoon
            size={25}
            className={
              "m-2 mx-3 cursor-pointer sm:mx-1 " + (isDarkMode && " text-white")
            }
            onClick={() => enableDarkMode()}
          />
        )}
        <PiUserCircleLight
          size={29}
          className={"m-2 mx-3 sm:mx-1 " + (isDarkMode && "filter invert")}
        />
      </div>
    </div>
  );
};

export default Header;
