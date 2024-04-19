import { useEffect } from 'react';
import { GoTriangleRight, GoTriangleUp } from 'react-icons/go';
import Size from '../utilities/Size.ts';

export default function XYPosition() {
  const isRoot = window.location.pathname === '/';

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const onMouseMove = (event: any): void => {
    const yPosition = document.getElementById('yPosition');
    const xPosition = document.getElementById('xPosition');
    const size = Size.get();

    if (yPosition && xPosition) {
      const maxHeight = size.height - 15;
      const maxWidth = size.width - 15;

      if (maxHeight >= event.clientY) {
        yPosition.style.top = `${event.clientY}px`;
      }

      if (maxWidth >= event.clientX) {
        xPosition.style.left = `${event.clientX}px`;
      }
    }
  };

  return (<div className={!isRoot ? 'hidden' : 'display'}>
    <div id="yPosition" className="fixed z-50 left-0 text-1xl text-fuchsia-500"><GoTriangleRight /></div>
    <div id="xPosition" className="fixed z-50 bottom-0 text-1xl text-fuchsia-500"><GoTriangleUp /></div>
  </div>);
};
