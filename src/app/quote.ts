export class Quote {
  upvotes: number;
  downvotes: number;
  splice(_i: number, _arg1: number) {
    throw new Error('Method not implemented.');
  }
  constructor(public saying: string, public author: string, public name: string) {
    this.upvotes = 0;
    this.downvotes = 0;
  }
}
