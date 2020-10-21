export class Joke {
  id:string;
  name:string;
  constructor(options: any = {}) {
      this.id = options.id || "";
      this.name = options.name || "";
  }
}
