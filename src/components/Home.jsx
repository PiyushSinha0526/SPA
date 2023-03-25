import { motion } from "framer-motion";
import React from "react";
import display from "../assets/Computerdisplay.png";
import mouse from "../assets/mouse.png";

function Home() {
  return (
    <div className=" flex md:flex-row flex-col-reverse w-full h-screen mt-5 sm:mt-10 md:m-0 justify-center items-center bg-[url('assets/wavepc.svg')] md:bg-center">
      <div className="flex justify-center lg:w-1/2 w-full relative isolate">
        <img
          src={display}
          alt="monitor"
          className="w-80 h-80 md:w-96 md:h-96 lg:w-fit lg:h-fit -z-10 drop-shadow-xl"
        />
        <img
          src={mouse}
          alt="mouse"
          className="absolute bottom-5 skew-y-6 -skew-x-3 right-[30%] md:right-[15%] lg:right-[25%] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-xl"
        />
      </div>
      <div className=" lg:w-1/2 w-full flex text-white px-10 md:px-0 md:pr-10">
        <div className="md:w-4/5 lg:3/5 flex flex-col justify-center items-center md:items-end md:text-right gap-3 md:gap-6 text-center ">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold md:text-right">
            Heading for Landing Page of Unknown Product{" "}
          </h1>
          <p className="text-sm md:text-base text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium aperiam temporibus, mollitia voluptatibus optio nisi
            sint ducimus odio eligendi exercitationem?
          </p>
          <button className="py-2 px-4 bg-gray-100 rounded-md text-blue-400 hover:bg-blue-400 hover:outline hover:text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
