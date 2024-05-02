import React from "react";
import { useSelector } from "react-redux";

const OpenSidebar = (item) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { name, icon } = item.data;
  const handleIsMenu = () => {
    let className = "rounded-md  hover:bg-gray-200  cursor-pointer ";

    if (isMenuOpen) {
      className += "p-3 m-2 mx-4 py-4 flex mr-8  items-center gap-6 w-[90%]";
    }
    return className;
  };
  return (
    <button className={handleIsMenu()}>
      <span className="">{icon}</span>
      <span className="">{name}</span>
    </button>
  );
};

export default OpenSidebar;
