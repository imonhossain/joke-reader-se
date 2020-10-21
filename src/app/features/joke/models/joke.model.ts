export class Joke {
  id:string;
  name:string;
  category:string;
  delivery:string;
  content:string;
  type:string;
  flags:string;
  constructor(options: any = {}) {
      this.id = options.id || "";
      this.category = options.category || "";
      this.delivery = options.delivery || "";
      this.content = options.content || "";
      this.type = options.type || "";
      this.flags = options.flags || [];
  }
}
