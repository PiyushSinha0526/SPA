import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaShoppingCart } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsScrolling(false);
      } else {
        setIsScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About Us",
      id: "aboutUs",
    },
    {
      name: "Features",
      id: "features",
    },
    {
      name: "Post",
      id: "post",
    },
    {
      name: "Reviews",
      id: "reviews",
    },
    {
      name: "Contact Us",
      id: "contactUs",
    },
  ];

  const menudd = {
    opened: {
      top: "0",
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      top: "-320px",
    },
  };

  return (
    <div
      className={`fixed w-screen bg-white z-20 ${
        isScrolling ? "shadow-md" : ""
      }`}
    >
      <div className="w-full max-w-[1200px] m-auto flex relative">
        <div className="flex w-full justify-between mx-10 items-center text-black h-20 ">
          {/* logo */}
          <div className="text-blue-400 ">
            <RiComputerFill size={45} className="drop-shadow-md skew-x-6" />
          </div>
          {/* nav item */}
          <nav className="hidden justify-center lg:flex">
            <div className="flex text-lg ">
              {navItems.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className={`navLinkLarge ${
                      activeIndex == index ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
          {/*  */}
          <div className="hidden lg:block relative">
            <FaShoppingCart size={21} />
            <span className="px-1 bg-blue-400 rounded-full text-xs absolute -right-1 -top-2">
              {1}
            </span>
          </div>
        </div>

        {/* mobile */}
        <div className="flex justify-center items-center lg:hidden mx-10">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="bg-blue-400 p-2 inline-flex items-center justify-center rounded-md text-white hover:text-blue-400 hover:bg-white hover:border-2 border-blue-400"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <motion.div
          ref={menuRef}
          className="w-full lg:hidden max-w-[1200px] bg-white absolute z-20"
          variants={menudd}
          initial={true}
          animate={isMenuOpen ? "opened" : "closed"}
        >
          {isMenuOpen && (
            <div className="flex flex-col mt-5 lg:hidden">
              <span
                className="self-end bg-blue-400 p-2 mr-10 inline-flex items-center justify-center rounded-md text-white hover:text-blue-400 hover:bg-white hover:outline outline-blue-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>

              <div className=" py-4 shadow-md flex flex-col justify-center items-center text-lg font-semibold text-gray-400 p-2">
                {navItems.map((item, index) => {
                  return (
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      key={index}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className={`mb-1 text-center hover:border-b-2 border-blue-400 ${
                        activeIndex == index ? "active font-bold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
