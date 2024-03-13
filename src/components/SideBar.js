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
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
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
        "sm:hidden w-2/12 h-[90vh] px-2 overflow-x-hidden overflow-y-hidden overscroll-none hover:overflow-y-scroll custom-scrollbar mt-[68px] font-roboto"
      }
    >
      <div>
        <div
          className={
            "flex items-center mx-2 my-1 p-2 bg-gray-100 rounded-lg text-sm font-semibold " +
            (isDarkMode && " text-white bg-white bg-opacity-10")
          }
        >
          <GoHome size={23} className="mr-6" />
          <Link to="/">Home</Link>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <SiYoutubeshorts size={23} className="mr-6" />
          <p>Shorts</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <MdOutlineSubscriptions size={23} className="mr-6" />
          <p>Subscriptions</p>
        </div>
      </div>
      <div>
        <hr className={"w-[220px] my-3 " + (isDarkMode && "opacity-40")} />
      </div>
      <div>
        <div
          className={
            "flex items-center m-2 transition-transform transform hover:bg-gray-100 hover:rounded-lg " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <p className="font-semibold m-2 mr-2">You</p>
          <GoChevronRight size={20} className="hover:scale-110" />
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg text-sm" +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <BiSolidUserRectangle size={22} className="mr-6" />
          <p>Your channel</p>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <GoHistory size={22} className="mr-6" />
          <p>History</p>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <MdOutlineOndemandVideo size={22} className="mr-6" />
          <p>Your videos</p>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <MdOutlineWatchLater size={22} className="mr-6" />
          <p>Watch Later</p>
        </div>
        <div
          className={
            "flex items-center m-2 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && "text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <BiLike size={22} className="mr-6" />
          <p>Liked Videos</p>
        </div>
      </div>
      <div>
        <hr className={"w-[220px] my-3 " + (isDarkMode && "opacity-40")} />
      </div>
      <div>
        <p
          className={"font-semibold my-2 mx-4 " + (isDarkMode && " text-white")}
        >
          Explore
        </p>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <LiaFireAltSolid size={24} className="mr-6 m-2" />
          <p>Trending</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <LiaShoppingBagSolid size={24} className="mr-6 m-2" />
          <p>Shopping</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <PiMusicNote size={24} className="mr-6 m-2" />
          <p>Music</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <GiClapperboard size={24} className="mr-6 m-2" />
          <p>Movies</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <RiSurroundSoundLine size={24} className="mr-6 m-2" />
          <p>Live</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <SiYoutubegaming size={23} className="mr-6 m-2" />
          <p>Gaming</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <HiOutlineNewspaper size={24} className="mr-6 m-2" />
          <p>News</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <GoTrophy size={24} className="mr-6 m-2" />
          <p>Sports</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <AiOutlineBulb size={24} className="mr-6 m-2" />
          <p>Learning</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <GiHanger size={24} className="mr-6 m-2" />
          <p>Fashion & Beauty</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <MdOutlinePodcasts size={24} className="mr-6 m-2" />
          <p>Podcasts</p>
        </div>
      </div>
      <div>
        <hr className={"w-[220px] my-3 " + (isDarkMode && "opacity-40")} />
      </div>
      <div>
        <div
          className={
            "flex items-center m-2 transition-transform transform hover:rounded-lg " +
            (isDarkMode && " text-white")
          }
        >
          <p className="font-semibold m-2 mr-2">More from YouTube</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <FaYoutube size={22} className="mr-6 fill-[#FF0000]" />
          <p>YouTube Premium</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <SiYoutubestudio size={22} className="mr-6 fill-[#FF0000]" />
          <p>YouTube Studio</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 p-2 hover:bg-gray-100 hover:rounded-lg text-sm " +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <SiYoutubemusic size={22} className="mr-6 fill-[#FF0000]" />
          <p>YouTube Music</p>
        </div>
        <div
          className={
            "flex items-center mx-2 my-1 p-2 hover:bg-gray-100 hover:rounded-lg text-sm" +
            (isDarkMode && " text-white hover:bg-white hover:bg-opacity-10")
          }
        >
          <TbBrandYoutubeKids
            size={22}
            className={
              "mr-6 fill-[#FF0000] " +
              (isDarkMode ? "stroke-white" : "stroke-black")
            }
          />
          <p>YouTube Kids</p>
        </div>
      </div>
    </div>
  ) : (
    displayShortMenu && (
      <div className="w-[90px] mt-[68px] sm:hidden">
        <div className="m-2 flex flex-col items-center">
          <div
            className={
              "mb-2 p-4 px-6 flex flex-col items-center hover:rounded-lg " +
              (isDarkMode
                ? "hover:bg-white hover:bg-opacity-15"
                : "hover:bg-black hover:bg-opacity-10")
            }
          >
            <GoHome size={24} className="mb-1" />
            <p className="text-xs">Home</p>
          </div>
          <div
            className={
              "mb-2 p-4 px-6 flex flex-col items-center hover:rounded-lg " +
              (isDarkMode
                ? "hover:bg-white hover:bg-opacity-15"
                : "hover:bg-black hover:bg-opacity-10")
            }
          >
            <SiYoutubeshorts size={24} className="mb-1" />
            <p className="text-xs">Shorts</p>
          </div>
          <div
            className={
              "mb-2 py-4 px-2 flex flex-col items-center hover:rounded-lg " +
              (isDarkMode
                ? "hover:bg-white hover:bg-opacity-15"
                : "hover:bg-black hover:bg-opacity-10")
            }
          >
            <MdOutlineSubscriptions size={24} className="mb-1" />
            <p className="text-xs">Subscriptions</p>
          </div>
          <div
            className={
              "mb-2 p-4 px-7 flex flex-col items-center hover:rounded-lg " +
              (isDarkMode
                ? "hover:bg-white hover:bg-opacity-15"
                : "hover:bg-black hover:bg-opacity-10")
            }
          >
            <MdOutlineVideoLibrary size={24} className="mb-1" />
            <p className="text-xs">You</p>
          </div>
        </div>
      </div>
    )
  );
};

export default SideBar;
