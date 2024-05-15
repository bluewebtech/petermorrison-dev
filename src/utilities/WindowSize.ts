export default class WindowSize {
  static get(): { height: number, width: number } {
    return {
      height: this.height(),
      width: this.width(),
    };
  }

  static height(): number {
    return (
      window.innerHeight ||
        document.documentElement.clientHeight ||
          document.body.clientHeight
    );
  }

  static width(): number {
    return (
      window.innerWidth ||
        document.documentElement.clientWidth ||
          document.body.clientWidth
    );
  }
}
