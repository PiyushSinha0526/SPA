import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

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
      name: "Services",
      id: "services",
    },
    {
      name: "Portfolio",
      id: "portfolio",
    },
    {
      name: "Blog",
      id: "blog",
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
          <div className="w-5 h-5 bg-blue-300"></div>
          {/* nav item */}
          <nav className="hidden justify-center lg:flex">
            <ul className="flex text-lg ">
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`navLinkLarge ${
                      activeIndex == index ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <a href="#">{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/*  */}
          <div className="hidden lg:block w-32 h-10 bg-blue-400 text-black">
            sdsdsd
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

              <ul className=" py-4 shadow-md flex flex-col justify-center items-center text-lg font-semibold text-gray-400 p-2">
                {navItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`mb-1 text-center hover:border-b-2 border-blue-400 ${
                        activeIndex == index ? "active font-bold" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <a href="#">{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
