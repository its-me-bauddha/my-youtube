import React from "react";
import { useSelector } from "react-redux";

const CloseSidebar = (item) => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const isDark = useSelector ((store) => store.app.isDark);
  const { icon, name } = item.data;
  return (
    isSidebarOpen && (
      <button className={`rounded-md w-20 py-4 text-black flex mr-12 ${isDark ? "bg-black text-white ": ""} hover:bg-gray-200  cursor-pointer  flex-col mt-3 items-center gap-2`}>
        <span className="">{icon}</span>
        <span className="">{name}</span>
      </button>
    )
  );
};

export default CloseSidebar;
