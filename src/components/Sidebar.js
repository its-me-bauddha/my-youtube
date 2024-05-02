import React from "react";
import { sidebarItems } from "../utils.js/constants";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OpenSidebar from "./OpenSidebar";
import CloseSidebar from "./CloseSidebar";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const isWatchPage = useSelector((store) => store.app.isWatchPage);
  const isDark = useSelector ((store) => store.app.isDark);
  const handleIsMenu = () => {
    let className;
    if (!isMenuOpen && isSidebarOpen === true) {
      className = "w-20 mx-2";
    }

    className += "rounded-md bg-black text-white cursor-pointer fixed";

    if (isMenuOpen && isSidebarOpen === false) {
      className += "flex-col  items-center gap-6 w-[13%] absolute z-10 ";
    } else {
      className += "w-20 mx-2 rounded-md bg-white text-black cursor-pointer";
    }
    return className;
  };

  return (
    !isWatchPage && (
      <div className={`${isMenuOpen && isSidebarOpen ? "" : handleIsMenu()} ${isDark && isMenuOpen ? "bg-black text-white" : ""}`}>
        {sidebarItems.map((item) => (
          <Link to={"/"}>
            {" "}
            {isMenuOpen ? (
              <OpenSidebar data={item} />
            ) : (
              <CloseSidebar data={item} />
            )}{" "}
          </Link>
        ))}
      </div>
    )
  );
};

export default Sidebar;
