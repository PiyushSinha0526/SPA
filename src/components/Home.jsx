import { delay, motion, spring } from "framer-motion";
import React from "react";
import display from "../assets/Computerdisplay.png";
import mouse from "../assets/mouse.png";

const leftRight = {
  mover: {
    x: [-20, 20, -20],
    y: [5, -5],
    transition: {
      x: { repeatType: "mirror", repeat: Infinity, duration: 4 },
      y: { repeatType: "mirror", repeat: Infinity, duration: 4 },
    },
  },
};

function Home() {
  return (
    <div
      id="home"
      className=" flex md:flex-row flex-col-reverse w-full h-screen mt-5 sm:mt-10 md:m-0 justify-center items-center bg-[url('assets/wavepc.svg')] md:bg-center"
    >
      <div
        className="flex justify-center lg:w-1/2 w-full relative isolate"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear", when: "beforeChildren" }}
      >
        <img
          src={display}
          alt="monitor"
          className="w-80 h-80 md:w-96 md:h-96 lg:w-fit lg:h-fit -z-10 drop-shadow-xl"
        />
        <motion.div
          variants={leftRight}
          animate="mover"
          className="absolute bottom-5 right-[30%] md:right-[15%] lg:right-[25%] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        >
          <img src={mouse} alt="mouse" className="w-full drop-shadow-xl " />
        </motion.div>
      </div>
      <div className=" lg:w-1/2 w-full flex text-white px-10 md:px-0 md:pr-10">
        <div className="md:w-4/5 lg:3/5 flex flex-col justify-center items-center md:items-end md:text-right gap-3 md:gap-6 text-center ">
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold md:text-right"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Heading for Landing Page of Unknown Product{" "}
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-gray-200"
            initial={{
              opacity: 0,
              y: 100,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeIn",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium aperiam temporibus, mollitia voluptatibus optio nisi
            sint ducimus odio eligendi exercitationem?
          </motion.p>
          <motion.button
            className="py-2 px-4 bg-gray-100 rounded-md text-blue-400 hover:bg-blue-400 hover:outline hover:text-white"
            initial={{
              opacity: 0,
              y: 120,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: "easeIn",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Read More
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Home;
