import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const  searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }else{
      getSearchSuggestion()
    }
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}e=video&key=` +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setSuggestions(json.items);

    dispatch(
      cacheResults({
        [searchQuery]  :json.items
      })
    )
  };
  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg items-center">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="menu"
          className="h-8 cursor-pointer"
        />

        <img
          className="h-8 mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiguHmyZdqBfvDVwGMx5r7HtGGciKICnSXot0My9RKKIzOi4a"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 items-center">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-800 rounded-l-full p-2 "
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border border-gray-800  rounded-r-full p-2 bg-gray-200">
            Search
          </button>
        </div>
        {
          showSuggestions && (
            <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100 ">
          <ul>
            {suggestions.map((s) => (
              <li
                key={s.etag}
                className="py-2 px-2 shadow sm hover:bg-gray-100"
              >
                {" "}
                {s.snippet.description}{" "}
              </li>
            ))}
          </ul>
        </div>
          )
        }
      </div>

      <div className="col-span-1">
        <img
          alt="user-icon"
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28I-5H6sO1MTry1y5diYr9SBqiHBHFhPYM7TnaJOOfugjweDP"
        />
      </div>
    </div>
  );
};

export default Head;
