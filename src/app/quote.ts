export class Quote {
  public upvotes: number;
  public downvotes: number;
  public createDate: Date;

  constructor(public saying: string, public author: string, public name: string) {

    this.upvotes = 0;
    this.downvotes = 0;
    this.createDate = new Date;
    
  }
}
