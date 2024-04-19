import React, { useState } from 'react';
import {
  MdOutlineHome,
  MdOutlinePerson,
  // MdOutlineMusicNote,
  // MdOutlineSettings,
  MdOutlineTerminal,
} from "react-icons/md";

export default function Navigation() {
  const [firstFade, setFirstFade] = useState<boolean>(false);

  const doFadeIn = () => setTimeout(() => setFirstFade(true), 1);

  doFadeIn();

  return (
    <nav className={`font-poppins  ${ firstFade ? "transition-all duration-500 opacity-100" : "opacity-0"}`}>
      <ul className="flex text-sm text-white font-light">
        <li className="mr-5 px-1 py-1">
          <a href="/">
            <MdOutlineHome className="mr-2 hidden sm:inline text-xl text-blue-500 relative bottom-0.5" />
            <div className="inline-block transition duration-200 ease-in-out hover:text-blue-300">Home</div>
          </a>
        </li>
        <li className="mr-5 px-1 py-1">
          <a href="/about">
            <MdOutlinePerson className="mr-2 hidden sm:inline text-xl text-purple-500 relative bottom-0.5" />
            <div className="inline-block transition duration-200 ease-in-out hover:text-purple-300">About</div>
          </a>
        </li>
        {/* <li className="mr-5 px-1 py-1">
          <a href="/music">
            <MdOutlineMusicNote className="mr-2 hidden sm:inline text-xl text-pink-500 relative bottom-0.5" />
            <div className="inline-block transition duration-200 ease-in-out hover:text-pink-300">Music</div>
          </a>
        </li>
        <li className="mr-5 px-1 py-1">
          <a href="/settings">
            <MdOutlineSettings className="mr-2 hidden sm:inline text-xl text-orange-500 relative bottom-0.5" />
            <div className="inline-block transition duration-200 ease-in-out hover:text-orange-300">Settings</div>
          </a>
        </li> */}
        <li className="mr-5 px-1 py-1">
          <a href="/terminal">
            <MdOutlineTerminal className="mr-2 hidden sm:inline text-xl text-gray-500 relative bottom-0.5" />
            <div className="inline-block transition duration-200 ease-in-out hover:text-gray-300">Terminal</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};
