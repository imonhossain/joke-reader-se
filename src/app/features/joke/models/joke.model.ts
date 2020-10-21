export class Joke {
  id:string;
  name:string;
  category:string;
  delivery:string;
  content:string;
  flags:string;
  constructor(options: any = {}) {
      this.id = options.id || "";
      this.category = options.category || "";
      this.delivery = options.delivery || "";
      this.content = options.content || "";
      this.flags = options.flags || [];
  }
}
