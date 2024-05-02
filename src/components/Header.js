import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdVideoCall, MdNotifications } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import {
  YOUTUBE_SEARCH_API,
  YT_HAMBURGER_ICON,
  YT_HAMBURGER_ICON_DARK,
  YT_LOGO,
} from "../utils.js/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleBackground, toggleMenu } from "../utils.js/appSlice";
import SearchCard from "./SearchCard";
import { cacheResults } from "../utils.js/searchSlice";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showSearchCard, setShowSearchCard] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    handletoggleMenu();
  
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchData(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const handletoggleMenu = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchData(json[1]);

    //dispatch action
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  
  return (
    <div className={` w-full flex items-center  pt-2  justify-between `}>
      <div className="flex items-center w-2/3">
        <div className={``} onClick={handletoggleMenu}><RxHamburgerMenu className="mx-2" size={"3rem"}/></div>
        <a href="/" target="">
          {" "}
          <img
            className="h-8 ml-2  text-black cursor-pointer"
            alt="yt-logo"
            src = {YT_LOGO }
          />
        </a>
      </div>
      <div className="flex justify-between mr-[200px] relative  ">
        <input
          className="w-[450px] h-10 border  border-gray-800 rounded-l-full text-center  bg-transparent"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSearchCard(true)}
          onBlur={() => setShowSearchCard(false)}
          
        />
        <span className="p-[10px] px-5 border  border-gray-800 rounded-r-full  cursor-pointer ">
          <FiSearch />
        </span>
      </div>

      {showSearchCard && searchData.length > 0 ? (
        <SearchCard data={searchData} />
      ) : (
        ""
      )}

      <div className="flex mr-16 gap-8 ">
        <span className=" cursor-pointer hover:scale-110"  >
          <MdDarkMode size="2em " />
        </span>
        <span className=" cursor-pointer hover:scale-110">
          <MdVideoCall size="2em" />
        </span>
        <span className="cursor-pointer hover:scale-110">
          <MdNotifications size="2em" />
        </span>
        <span className="cursor-pointer hover:scale-110">
          <FaCircleUser size="2em" />
        </span>
      </div>
    </div>
  );
};

export default Header;
