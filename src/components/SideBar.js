import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { GoChevronRight } from "react-icons/go";
import { BiSolidUserRectangle } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineOndemandVideo,
  MdOutlineWatchLater,
  MdOutlinePodcasts,
} from "react-icons/md";
import { LiaFireAltSolid } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiMusicNote } from "react-icons/pi";
import { GiClapperboard } from "react-icons/gi";
import { RiSurroundSoundLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { GoTrophy } from "react-icons/go";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { BiLike } from "react-icons/bi";
import "../index.css";
import { showShortMenu } from "../utils/appSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const displayShortMenu = useSelector((store) => store.app.displayShortMenu);

  useEffect(() => {
    const isHomePage = location.pathname === "/";
    if (isHomePage && !isMenuOpen) dispatch(showShortMenu());
  }, [isMenuOpen, location.pathname]);

  // console.log("menu", isMenuOpen);
  // console.log("short menu", displayShortMenu);

  const isDarkMode = useSelector((store) => store.darkMode.isDarkMode);

  //Early return pattern
  // if (!isMenuOpen) return null;

  return isMenuOpen ? (
    <div
      className={
        "w-[230px] h-[90vh] px-2 overflow-x-hidden overflow-y-auto overscroll-none hover:overflow-y-scroll custom-scrollbar mt-[68px] font-roboto "
      }
    >
      <div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <GoHome size={23} className="mr-6" />
          <Link to="/">Home</Link>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <SiYoutubeshorts size={23} className="mr-6" />
          <p>Shorts</p>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <MdOutlineSubscriptions size={23} className="mr-6" />
          <p>Subscriptions</p>
        </div>
      </div>
      <hr className="w-[200px] my-3" />
      <div>
        <div
          className={
            "flex items-center m-2 transition-transform transform hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <p className="font-semibold text-lg m-2 mr-2">You</p>
          <GoChevronRight size={20} className="hover:scale-110" />
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg" +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <BiSolidUserRectangle size={22} className="mr-4" />
          <p>Your channel</p>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <GoHistory size={22} className="mr-4" />
          <p>History</p>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <MdOutlineOndemandVideo size={22} className="mr-4" />
          <p>Your videos</p>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <MdOutlineWatchLater size={22} className="mr-4" />
          <p>Watch Later</p>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <BiLike size={22} className="mr-4" />
          <p>Liked Videos</p>
        </div>
      </div>
      <hr className="w-[200px] my-3" />
      <div>
        <p
          className={
            "font-semibold text-lg my-2 mx-4 " + (isDarkMode && " text-white")
          }
        >
          Explore
        </p>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <LiaFireAltSolid size={24} className="mr-4 m-2" />
          <p>Trending</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <LiaShoppingBagSolid size={24} className="mr-4 m-2" />
          <p>Shopping</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <PiMusicNote size={24} className="mr-4 m-2" />
          <p>Music</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <GiClapperboard size={24} className="mr-4 m-2" />
          <p>Movies</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <RiSurroundSoundLine size={24} className="mr-4 m-2" />
          <p>Live</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <SiYoutubegaming size={23} className="mr-4 m-2" />
          <p>Gaming</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <HiOutlineNewspaper size={24} className="mr-4 m-2" />
          <p>News</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <GoTrophy size={24} className="mr-4 m-2" />
          <p>Sports</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <AiOutlineBulb size={24} className="mr-4 m-2" />
          <p>Learning</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <GiHanger size={24} className="mr-4 m-2" />
          <p>Fashion & Beauty</p>
        </div>
        <div
          className={
            "flex items-center m-2 hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <MdOutlinePodcasts size={24} className="mr-4 m-2" />
          <p>Podcasts</p>
        </div>
      </div>
    </div>
  ) : (
    displayShortMenu && (
      <div className="w-[80px] m-2 mt-[68px] ">
        <div className="flex flex-col items-center">
          <div className="m-2 mb-5 flex flex-col items-center">
            <GoHome size={30} />
            <p className="text-xs">Home</p>
          </div>
          <div className="m-2 mb-5 flex flex-col items-center">
            <SiYoutubeshorts size={30} />
            <p className="text-xs">Shorts</p>
          </div>
          <div className="m-2 mb-5 flex flex-col items-center">
            <MdOutlineSubscriptions size={30} />
            <p className="text-xs">Subscriptions</p>
          </div>
          <div className="m-2 mb-5 flex flex-col items-center">
            <MdOutlineVideoLibrary size={30} />
            <p className="text-xs">You</p>
          </div>
        </div>
      </div>
    )
  );
};

export default SideBar;
