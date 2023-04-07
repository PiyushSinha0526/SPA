import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsTwitter } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id="contactUs"
      className="mt-20 flex flex-col items-center w-full h-fit lg:h-screen px-10 m-auto gap-7 "
    >
      <h3 className="text-4xl">Contact Us</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-[320px] w-full md:max-w-[400px] shadow-lg p-5 rounded-lg"
      >
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="shadow-lg py-2 px-4 rounded-lg w-full active:outline focus:outline outline-2 outline-blue-400"
        />
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="shadow-lg py-2 px-4 rounded-lg w-full active:outline focus:outline outline-2 outline-blue-400"
        />
        <input
          type="text"
          value={subject}
          placeholder="subject"
          onChange={(e) => setSubject(e.target.value)}
          className="shadow-lg py-2 px-4 rounded-lg w-full active:outline focus:outline outline-2 outline-blue-400"
        />
        <textarea
          value={message}
          placeholder="message ..."
          onChange={(e) => setMessage(e.target.value)}
          className="shadow-lg py-2 px-4 rounded-lg w-full active:outline focus:outline outline-2 outline-blue-400"
        />
        <motion.button
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full shadow-2xl py-2 px-4 rounded-lg font-bold text-white bg-blue-400 hover:bg-white hover:outline hover:text-blue-400 outline-2 outline-blue-400 "
        >
          Submit
        </motion.button>
      </form>
      <div className="flex flex-col items-center gap-4 text-lg text-gray-400">
        Social media links:
        <div className="flex gap-4">
          <BsTwitter size={25} className="text-blue-500 cursor-pointer hover:scale-105" />
          <RiInstagramFill size={25} className="text-orange-500 cursor-pointer hover:scale-105" />
          <RiFacebookFill size={25} className="text-blue-500 cursor-pointer hover:scale-105" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-3xl font-bold">Or</span>
        <div className="flex flex-col gap-1 items-center">
          <span>Phone no</span>
          <span>+1 202-918-2132</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
