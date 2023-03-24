import React, { useState } from "react";

function Card({ name, Icon, colorValue, bg }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`p-4 shadow-2xl rounded-lg flex flex-col justify-between items-center w-full h-44 ${
        !isHover ? `bg-white` : `${bg}`
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span className=" h-full flex justify-center items-center ">
        <Icon
          className={` ${isHover ? `text-white` : `${colorValue}`}`}
          size={40}
        />
      </span>
      <span
        className={`self-end text-center w-full text-xl ${
          isHover ? `text-white` : `text-gray-500`
        }`}
      >
        {name}
      </span>
    </div>
  );
}

export default Card;
