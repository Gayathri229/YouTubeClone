import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import { BiSolidUserRectangle } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaFireAltSolid } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiMusicNote } from "react-icons/pi";
import { GiClapperboard } from "react-icons/gi";
import { RiSurroundSoundLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { GoTrophy } from "react-icons/go";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import "../index.css";


const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);

  //Early return pattern
  // if (!isMenuOpen) return null;

  return isMenuOpen ? (
    <div className="w-[230px] h-[90vh] px-2 overscroll-none overflow-hidden hover:overflow-y-scroll custom-scrollbar">
      <div>
        <div className="flex items-center m-4">
          <GoHome size={25} className="mr-6" />
          <Link to="/">Home</Link>
        </div>
        <div className="flex items-center m-4">
          <SiYoutubeshorts size={25} className="mr-6" />
          <p>Shorts</p>
        </div>
        <div className="flex items-center m-4">
          <MdOutlineSubscriptions size={25} className="mr-6" />
          <p>Subscriptions</p>
        </div>
      </div>
      <hr className="w-[230px]" />
      <div>
        <div className="flex items-center m-2 transition-transform transform hover:bg-gray-100 hover:rounded-lg">
          <p className="font-semibold text-lg m-2 mr-2">You</p>
          <GoChevronRight size={20} className="hover:scale-110"/>
        </div>
        <div className="flex items-center m-2">
          <BiSolidUserRectangle size={22} className="mr-4 m-2" />
          <p>Your channel</p>
        </div>
        <div className="flex items-center m-2">
          <GoHistory size={22} className="mr-4 m-2" />
          <p>History</p>
        </div>
        <div className="flex items-center m-2">
          <MdOutlineOndemandVideo size={22} className="mr-4 m-2" />
          <p>Your videos</p>
        </div>
        <div className="flex items-center m-2">
          <MdOutlineWatchLater size={22} className="mr-4 m-2" />
          <p>Watch Later</p>
        </div>
      </div>
      <hr className="w-[230px]" />
      <div>
        <p className="font-semibold text-lg m-2 mx-4">Explore</p>
        <div className="flex items-center m-2">
          <LiaFireAltSolid size={24} className="mr-4 m-2" />
          <p>Trending</p>
        </div>
        <div className="flex items-center m-2">
          <LiaShoppingBagSolid size={24} className="mr-4 m-2" />
          <p>Shopping</p>
        </div>
        <div className="flex items-center m-2">
          <PiMusicNote size={24} className="mr-4 m-2" />
          <p>Music</p>
        </div>
        <div className="flex items-center m-2">
          <GiClapperboard size={24} className="mr-4 m-2" />
          <p>Movies</p>
        </div>
        <div className="flex items-center m-2">
          <RiSurroundSoundLine size={24} className="mr-4 m-2" />
          <p>Live</p>
        </div>
        <div className="flex items-center m-2">
          <SiYoutubegaming size={23} className="mr-4 m-2" />
          <p>Gaming</p>
        </div>
        <div className="flex items-center m-2">
          <HiOutlineNewspaper size={24} className="mr-4 m-2" />
          <p>News</p>
        </div>
        <div className="flex items-center m-2">
          <GoTrophy size={24} className="mr-4 m-2" />
          <p>Sports</p>
        </div>
        <div className="flex items-center m-2">
          <AiOutlineBulb size={24} className="mr-4 m-2" />
          <p>Learning</p>
        </div>
        <div className="flex items-center m-2">
          <GiHanger size={24} className="mr-4 m-2" />
          <p>Fashion & Beauty</p>
        </div>
        <div className="flex items-center m-2">
          <MdOutlinePodcasts size={24} className="mr-4 m-2" />
          <p>Podcasts</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-[80px] m-2">
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
  );
};

export default SideBar;
