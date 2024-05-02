import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const data = ["All", "React", "Vue", "Angular", "Svelte", "React Native",  "Music", "JavaScript",  "Live" , "Physics" , "Maths","Movies", "Hindi Songs", "Comedy", "Cricket"]
  return (
    <div className="flex overflow-scroll">
      {
        data.map((item, index) => (
          <Button key={index} data={item} />
        ))
      }
      
    </div>
  );
};

export default ButtonList;
