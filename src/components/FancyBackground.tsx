import { useEffect, useState } from 'react';
import LocalStorage from '../utilities/LocalStorage.ts';
import DisneyMovies from '../data/disney-movies.json';

interface FancyBackgroundItem {
  color: string;
  text: string;
}

export default function FancyBackground() {
  const isRoot = window.location.pathname === '/';

  const [fancyBackgroundItems, setFancyBackgroundItems] = useState<FancyBackgroundItem[]>([]);

  // I stole this code from the stackoverflow.
  // Thanks Internet developer person!
  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b}, 0.3)`;
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

  const backgroundChars = fancyBackgroundItems.map((item, key) => {
    return (<span className="mr-1 inline-flex" style={{color: item.color}} key={key}>{item.text}</span>)
  });

  return (<div className="fixed m-0 p-0 select-none">{isRoot ? backgroundChars : ''}</div>);
};
