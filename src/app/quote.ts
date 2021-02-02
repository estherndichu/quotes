export class Quote {
    upvotes: any;
  downvotes: any;
    splice(i: any, arg1: number) {
      throw new Error('Method not implemented.');
    }
    constructor(public saying:string,public author: string,public name: string){
      }
}
