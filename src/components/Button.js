import React from "react";

const Button = ({data}) => {
  return (
    <div className="border p-1 m-2 rounded-lg shadow-lg  mt-4 hover:bg-gray-200 cursor-pointer">
     {data}
    </div>
  );
};

export default Button;
