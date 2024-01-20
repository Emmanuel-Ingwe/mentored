class LocalStorageManage {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  save(data: unknown) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }

  get() {
    if (localStorage.getItem(this.name)) {
      const local = localStorage.getItem(this.name);
      return JSON.parse(local!);
    }
    return null;
  }

  delete() {
    return localStorage.removeItem(this.name);
  }

  get isSaved() {
    return (
      localStorage.getItem(this.name) !== undefined &&
      localStorage.getItem(this.name) !== null
    );
  }
}

export default LocalStorageManage;
