import { useEffect, useRef, useState } from 'react';
import Color from '../utilities/Color.js';
import LocalStorage from '../utilities/LocalStorage.ts';
import DisneyMovies from '../data/disney-movies.json';

interface FancyBackgroundItem {
  color: string;
  text: string;
}

export default function FancyBackground() {
  const fancyBackground = useRef<HTMLInputElement>(null);

  const [fancyBackgroundItems, setFancyBackgroundItems] = useState<FancyBackgroundItem[]>([]);

  useEffect(() => {
    if (LocalStorage.has('fancy-background')) {
      const fancyBackground = JSON.parse(LocalStorage.get('fancy-background'));
      setFancyBackgroundItems((fancyBackgroundItems) => fancyBackground);
    } else {
      const fancyBackgroundToString = DisneyMovies.join(', ').replace(/[^a-zA-Z ]/g, '');
      const fancyBackgroundCollection: FancyBackgroundItem[] = [];
      const fancyBackgroundBase64 = btoa(fancyBackgroundToString);

      if (fancyBackgroundBase64) {
        for (let i = 0; i < fancyBackgroundBase64.length; i++) {
          fancyBackgroundCollection.push({
            color: Color.random(),
            text: fancyBackgroundBase64[i],
          });
        }

        setFancyBackgroundItems((fancyBackgroundItems) => fancyBackgroundCollection);

        const fancyBackground = JSON.stringify(fancyBackgroundCollection);
        LocalStorage.set('fancy-background', fancyBackground);
      }
    }
  }, []);

  useEffect(() => {
    if (fancyBackground.current) {
      fancyBackground.current.addEventListener('mousemove', onMouseMove);
      return () => window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);

  const onMouseMove = (event: any): void => {
    const element = document.getElementById(event.target.id);

    if (element) {
      element.style.color = Color.random(1);

      setTimeout(() => element.style.color = Color.random(), 5000);
    }
  };

  const backgroundChars = fancyBackgroundItems.map((item, key) => {
    return (<span
      className="mr-1 inline-flex inline-block"
      id={`fancy-background-${String(key)}`}
      style={{color: item.color}}
      key={key}>{item.text}</span>);
  });

  return (<div
    className="fixed m-0 p-0 select-none"
    ref={fancyBackground}>{backgroundChars}</div>);
};
