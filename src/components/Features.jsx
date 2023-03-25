import React from "react";
import { BsWrenchAdjustable } from "react-icons/bs";
import { MdPriceChange } from "react-icons/md";
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
    color: "text-sky-400",
    bg: "bg-sky-400",
  },
  {
    name: "Delivery ",
    icon: CiDeliveryTruck,
    color: "text-sky-400",
    bg: "bg-sky-400",
  },
];

function Features() {
  return (
    <div className=" flex flex-col items-center max-w-6xl w-full h-fit md:h-screen px-10 m-auto gap-7 ">
      <h2 className="text-3xl md:text-4xl text-center">Popular Features</h2>
      <p className="text-gray-400 text-base leading-6 text-center max-w-[550px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        nostrum harum voluptatibus rem incidunt iure Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Officiis dis
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {featureItem.map((fi) => (
          <Card
            key={fi.name}
            name={fi.name}
            Icon={fi.icon}
            colorValue={fi.color}
            bg={fi.bg}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
