import React, { useEffect, useRef } from 'react';
import LocalStorage from '../utilities/LocalStorage.ts';
import DisneyMovies from '../data/disney-movies.json';

export default function HomeBody() {
  const width = '2500';

  const height = '1200';

  const canvasRef = useRef(null);

  // I stole this code from the stackoverflow.
  // Thanks Internet developer person!
  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b}, 0.3)`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasElement = document.getElementById('fancyBackground');

    if (canvas && canvasElement) {
      const context = (canvas as HTMLCanvasElement).getContext('2d');

      canvasElement.setAttribute('width', width);
      canvasElement.setAttribute('height', height);

      if (context) {
        if (LocalStorage.has('body_background')) {
          const toDrawUrl = LocalStorage.get('fancy-background');
          const img = new window.Image();

          img.addEventListener('fancyBackground', () => {
              context.drawImage(img, 0, 0);
          });

          img.setAttribute('src', toDrawUrl);
        }

        if (!LocalStorage.has('body_background')) {
          context.font = '12px Arial';

          // @ts-ignore
          context.letterSpacing = '8px';

          const fillText = DisneyMovies.join(', ').replace(/[^a-zA-Z ]/g, '');

          const fillTextArray: string[] = [];

          for (let i = 0; i < 50; i++) fillTextArray[i] = btoa(fillText);

          const fillTextString = fillTextArray.join().match(new RegExp('.{1,1000}', 'g'));

          if (fillTextString) {
            for (let i = 0; i < fillTextString.length; i++) {
              let x = 0;

              for(let j = 0; j <= fillTextString[i].length; ++j) {
                const ch = fillTextString[i].charAt(j);

                context.fillStyle = randomColor();

                context.fillText(fillTextString[i].charAt(j), x, 50 + i * 20);
                x += context.measureText(ch).width;
              }
            }
          }

          // @ts-ignore
          const url = canvasElement.toDataURL();

          LocalStorage.set('fancy-background', url);
        }
      }
    }
  }, []);

  return (
    <div className="fixed inset-0 m-0 p-0">
      <canvas id="fancyBackground" ref={canvasRef} />
    </div>
  )
};
