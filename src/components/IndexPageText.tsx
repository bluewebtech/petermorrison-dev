import React, { useState } from 'react';

export default function Terminal() {
  const [firstFade, setFirstFade] = useState<boolean>(false);
  const [secondFade, setSecondFade] = useState<boolean>(false);

  const doFadeIn = () => {
    setTimeout(() => setFirstFade(true), 1);
    setTimeout(() => setSecondFade(true), 2000);
  };

  doFadeIn();

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          <span className={`mr-2 text-blue-500 ${
            firstFade
            ? "transition-all duration-500 opacity-100"
            : "opacity-0"}`}>Hi,</span>
          <span className={`${
            firstFade
            ? "transition-all delay-500 duration-1000 opacity-100"
            : "opacity-0"}`}>I'm Pete.</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
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
    </div>
  );
};
