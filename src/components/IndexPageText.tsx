import React, { useState } from 'react';
import { FaEtsy, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


export default function Terminal() {
  const [firstFade, setFirstFade] = useState<boolean>(false);

  const [secondFade, setSecondFade] = useState<boolean>(false);

  const doFadeIn = () => {
    setTimeout(() => setFirstFade(true), 100);
    setTimeout(() => setSecondFade(true), 1500);
  };

  doFadeIn();

  return (
    <div className="font-poppins w-fit">
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          <span className={`mr-2 text-blue-500 ${
            firstFade
            ? "transition-all duration-500 opacity-100"
            : "opacity-0"}`}>Hi,</span>
          <span className={`${
            firstFade
            ? "transition-all delay-500 duration-1000 opacity-100"
            : "opacity-0"}`}>I'm Pete.</span>
        </h1>
        <p className="mt-4 text-xl leading-8 text-white">
          <span className={`mr-2 ${
            secondFade
            ? "transition-all duration-500 opacity-100"
            : "opacity-0"}`}>Software Engineer,</span>
          <span className={`mr-2 ${
            secondFade
            ? "transition-all delay-500 duration-500 opacity-100"
            : "opacity-0"}`}>Designer,</span>
          <span className={`${
            secondFade
            ? "transition-all delay-1000 duration-500 opacity-100"
            : "opacity-0"}`}>Homebrewer</span>
        </p>
        <p className="mt-4 text-3xl leading-8 text-3xl text-white">
          <a href="https://github.com/bluewebtech" target="_blank" rel="noreferrer">
            <FaGithub className="inline mr-5 transition duration-200 ease-in-out text-white hover:text-gray-500" />
          </a>
          <a href="https://www.linkedin.com/in/peter-morrison-info/" target="_blank" rel="noreferrer">
            <FaLinkedin className="inline mr-5 transition duration-200 ease-in-out text-white hover:text-blue-500" />
          </a>
          <a href="https://twitter.com/bluewebtech" target="_blank" rel="noreferrer">
            <FaXTwitter className="inline mr-5 transition duration-200 ease-in-out text-white hover:text-gray-600" />
          </a>
          <a href="https://leetcode.com/bluewebtech/" target="_blank" rel="noreferrer">
            <SiLeetcode className="inline mr-5 transition duration-200 ease-in-out text-white hover:text-orange-500" />
          </a>
          <a href="https://www.etsy.com/shop/GnarlyCatDesigns" target="_blank" rel="noreferrer">
            <FaEtsy className="inline mr-5 transition duration-200 ease-in-out text-white hover:text-orange-600" />
          </a>
        </p>
    </div>
  );
};
