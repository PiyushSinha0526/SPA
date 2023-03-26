import React from "react";
import { motion } from "framer-motion";
import { BsWrenchAdjustable } from "react-icons/bs";
import {
  MdPriceChange,
  MdOutlineShop,
  MdOutlineSpatialTracking,
  MdOutlineSell,
} from "react-icons/md";
import { GiBroom } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import Card from "./Card";

const featureItem = [
  {
    name: "Customization",
    icon: BsWrenchAdjustable,
    color: "text-black",
    bg: "bg-black",
  },
  {
    name: "Maintenance Services",
    icon: GiBroom,
    color: "text-blue-400",
    bg: "bg-blue-400",
  },
  {
    name: "Competitive Pricing",
    icon: MdPriceChange,
    color: "text-red-400",
    bg: "bg-red-400",
  },
  {
    name: "Technical Support",
    icon: BiSupport,
    color: "text-teal-400",
    bg: "bg-teal-400",
  },
  {
    name: "Online Tracking ",
    icon: MdOutlineSpatialTracking,
    color: "text-blue-400",
    bg: "bg-blue-400",
  },
  {
    name: "Sell Product",
    icon: MdOutlineSell,
    color: "text-red-400",
    bg: "bg-red-400",
  },
  {
    name: "Delivery ",
    icon: CiDeliveryTruck,
    color: "text-teal-400",
    bg: "bg-teal-400",
  },
  {
    name: "Online Shopping ",
    icon: MdOutlineShop,
    color: "text-black",
    bg: "bg-black",
  },
];

function Features() {
  return (
    <div
      id="features"
      className=" flex flex-col items-center max-w-6xl w-full h-fit lg:h-screen px-10 m-auto gap-7 "
    >
      <h2 className="text-3xl md:text-4xl text-center">Popular Features</h2>
      <p className="text-gray-400 text-base leading-6 text-center max-w-[550px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        nostrum harum voluptatibus rem incidunt iure Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Officiis dis
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {featureItem.map((fi, idx) => (
          <motion.div
            key={fi.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: idx * 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Card
              name={fi.name}
              Icon={fi.icon}
              colorValue={fi.color}
              bg={fi.bg}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;
