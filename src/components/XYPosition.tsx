import { useEffect, useState } from 'react';
import { GoTriangleRight, GoTriangleUp } from 'react-icons/go';
import WindowSize from '../utilities/WindowSize.ts';

export default function XYPosition() {
  const [yPosition, setYPosition] = useState<number>(0);

  const [xPosition, setXPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const onMouseMove = (event: any): void => {
    const yPosition = document.getElementById('yPosition');
    const xPosition = document.getElementById('xPosition');
    const size = WindowSize.get();

    if (yPosition && xPosition) {
      const maxHeight = size.height;
      const maxWidth = size.width;

      if (maxHeight >= event.clientY && event.clientY >= 61) {
        yPosition.style.top = `${event.clientY}px`;
        setYPosition(event.clientY);
      }

      if (maxWidth >= event.clientX) {
        xPosition.style.left = `${event.clientX}px`;
        setXPosition(event.clientX);
      }
    }
  };

  return (<div className="display invisible lg:visible">
    <div id="yPosition" className="fixed left-0 text-1xl">
      <GoTriangleRight className="relative -top-3 -ml-1 text-gray-400" />
      <div className="w-screen -mt-5 ml-2 border-t border-dashed border-gray-700" />
    </div>
    <div id="xPosition" className="fixed bottom-0 text-1xl">
      <div className="h-screen -mb-2 border-l border-dashed border-gray-700" />
      <GoTriangleUp className="relative -bottom-1 -left-2 text-gray-400" />
    </div>
    <div className="fixed bottom-0 right-0 pt-0 pr-2 pb-1 pl-2 w-28 bg-slate-800 text-center bg-opacity-75">
      <span className="mr-2 text-xs text-gray-400">x: {xPosition}</span>
      <span className="text-xs text-gray-400">y: {yPosition}</span>
    </div>
  </div>);
};
