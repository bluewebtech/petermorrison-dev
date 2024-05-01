import { useEffect, useRef, useState } from 'react';
import LocalStorage from '../utilities/LocalStorage.ts';
import DisneyMovies from '../data/disney-movies.json';

interface FancyBackgroundItem {
  color: string;
  text: string;
}

interface CurrentHoveredItem {
  color: string | null;
  id: string | null;
}

export default function FancyBackground() {
  const fancyBackground = useRef<HTMLInputElement>(null);

  const [fancyBackgroundItems, setFancyBackgroundItems] = useState<FancyBackgroundItem[]>([]);

  let currentHoveredItem = useRef<CurrentHoveredItem>({
    color: null,
    id: null,
  });

  // I stole this code from the stackoverflow.
  // Thanks Internet developer person!
  const randomColor = (opacity = 0.3) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b}, ${opacity})`;
  };

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
            // key: uuidv4(),
            color: randomColor(),
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

  const backgroundChars = fancyBackgroundItems.map((item, key) => {
    return (<span
      className="mr-1 inline-flex inline-block"
      id={`fancy-background-${String(key)}`}
      style={{color: item.color}}
      key={key}>{item.text}</span>)
  });

  const onMouseMove = (event: any): void => {
    const element = document.getElementById(event.target.id);

    if (element) {
      element.style.color = randomColor(1);

      setTimeout(() => element.style.color = randomColor(), 5000);
    }
  };

  return (<div className="fixed m-0 p-0 select-none" ref={fancyBackground}>{backgroundChars}</div>);
};
