export default class Size {
  /**
   * Get both the height and width of the window.
   */
  static get(): { height: number, width: number } {
    return {
      height: this.height(),
      width: this.width(),
    };
  }

  /**
   * Get current window height.
   */
  static height(): number {
    return (
      window.innerHeight ||
        document.documentElement.clientHeight ||
          document.body.clientHeight
    );
  }

  /**
   * Get current window width.
   */
  static width(): number {
    return (
      window.innerWidth ||
        document.documentElement.clientWidth ||
          document.body.clientWidth
    );
  }
}
