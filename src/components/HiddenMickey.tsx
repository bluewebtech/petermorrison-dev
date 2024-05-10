import { useEffect, useRef, useState } from 'react';
import { RiMickeyLine } from 'react-icons/ri';
import Color from '../utilities/Color.js';
import WindowSize from '../utilities/WindowSize.ts';

export default function HiddenMickey() {
  const mickeyRef = useRef<HTMLInputElement>(null);

  const [yPosition, setYPosition] = useState<number>(0);

  const [xPosition, setXPosition] = useState<number>(0);

  useEffect(() => {
    if (mickeyRef.current) {
      onPageLoad();
      window.addEventListener('resize', onPageLoad);
      return () => window.removeEventListener('resize', onPageLoad);
    }
  }, []);

  const onPageLoad = (event: any = null) => {
    const size = WindowSize.get();

    setYPosition(Math.floor(Math.random() * size.height));
    setXPosition(Math.floor(Math.random() * size.width));
  };

  return (<div>
    <div
      className="absolute cursor-pointer transition-all duration-100 opacity-100"
      style={{top: `${yPosition}px`, left: `${xPosition}px`}}
      ref={mickeyRef}>
      <RiMickeyLine style={{color: Color.random(), fontSize: '22px'}} />
    </div>
  </div>);
};
