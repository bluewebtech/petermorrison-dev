export default class LocalStorage {
  static delete(name: string): void {
    localStorage.remove(name);
  }

  static get(name: string): any {
    const storage = localStorage.getItem(name);

    if (storage === null) {
      return false;
    }

    return JSON.parse(atob(storage));
  }
  static has(name: string): boolean {
    return (localStorage.getItem(name) !== null);
  }

  static set(name: string, payload: any): void {
    return localStorage.setItem(name, btoa(JSON.stringify(payload)));
  }
}
