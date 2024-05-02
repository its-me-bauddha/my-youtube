import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const SearchCard = (data) => {
  const searchData = data.data;
  const isDark = useSelector ((store) => store.app.isDark);
  return (
    <div className="bg-gray-50 hover:cursor-pointer rounded-xl shadow-md absolute  mx-[440px]  z-20 flex mt-auto top-16">
      <ul className={`w-[32rem] ${isDark ? "bg-black" : ""}`}>
        {searchData.map((dataSearch, index) => (
          <li
            className="hover:bg-slate-200 flex items-center gap-2 px-2 py-2 "
            key={index}
          >
            <FiSearch /> {dataSearch}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCard;
