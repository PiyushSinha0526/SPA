import React from "react";
import { FaCheck } from "react-icons/fa";
import build from "../assets/build.png";

function About() {
  const products = [
    {
      name: "Laptop",
    },
    {
      name: "Pre-Build PC",
    },
    {
      name: "Custom PC",
    },
    {
      name: "Pc Components",
    },
    {
      name: "Gaming Consoles",
    },
    {
      name: "Speakers",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl w-full h-fit md:h-[80vh] mb-10 md:p-0 md:pl-10 pl-8  m-auto gap-10 ">
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur
        </h3>
        <p className=" text-gray-400 pr-6 text-sm md:text-base text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          rerum veritatis hic? Saepe ab ipsa aspernatur quia recusandae quae
        </p>
        <div className=" grid grid-cols-2 gap-4 m-auto md:m-0 ">
          {products.map((prod) => (
            <div key={prod.name} className="w-full mt-2 flex gap-2 ">
              <FaCheck className="text-blue-400" />
              <span className="text-gray-700">{prod.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center relative">
        <img
          src={build}
          alt="pc build"
          className="w-full min-w-[240px] md:w-4/5 drop-shadow-xl"
        />
        <svg
          id="10015.io"
          viewBox="0 0 480 480"
          className="absolute top-0 min-w-[300px] sm:min-w-[400px] w-full -z-10"
        >
          <path
            fill="#93c5fd"
            d="M439.5,308.5Q429,377,366.5,406.5Q304,436,245.5,420Q187,404,137.5,377Q88,350,56,295Q24,240,46.5,178Q69,116,125.5,89Q182,62,243.5,51Q305,40,357.5,78Q410,116,430,178Q450,240,439.5,308.5Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default About;
