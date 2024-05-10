export default class Color {
  // I stole this code from the stackoverflow.
  // Thanks Internet developer person!
  static random(opacity = 0.3) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b}, ${opacity})`;
  }
}
