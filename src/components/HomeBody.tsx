import React, { useEffect, useState } from 'react';
import LocalStorage from '../utilities/LocalStorage.ts';
import DisneyMovies from '../data/disney-movies.json';

interface Color {
  color: string;
  text: string;
}

export default function HomeBody() {
  // I stole this code from the stackoverflow.
  // Thanks Internet developer person!
  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b}, 0.3)`;
  };

  const [backgroundItems, setBackgroundItems] = useState<Color[]>([]);

  useEffect(() => {
    if (LocalStorage.has('fancy-background')) {
      const fancyBackground = JSON.parse(LocalStorage.get('fancy-background'));
      setBackgroundItems((backgroundItems) => fancyBackground);
    } else {
      const fillText = DisneyMovies.join(', ').replace(/[^a-zA-Z ]/g, '');
      const fillStyles: Color[] = [];
      const fillTextArray: string[] = [];

      for (let i = 0; i < 1; i++) fillTextArray[i] = btoa(fillText);

      const fillTextString = fillTextArray.join();

      if (fillTextString) {
        for (let i = 0; i < fillTextString.length; i++) {
          fillStyles.push({
            color: randomColor(),
            text: fillTextString[i],
          });
        }

        setBackgroundItems((backgroundItems) => fillStyles);

        const fancyBackground = JSON.stringify(fillStyles)
        LocalStorage.set('fancy-background', fancyBackground);
      }
    }
  }, []);

  const backgroundChars = backgroundItems.map((item, key) => {
    return (
    <span className="mr-1 inline-flex"
          style={{color: item.color}}
          key={key}>{item.text}
    </span>
  )});

  return (
    <div className="fixed m-0 p-0 select-none">
      {backgroundChars}
    </div>
  );
};
