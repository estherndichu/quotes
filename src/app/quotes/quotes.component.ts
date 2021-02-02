import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  title = 'INSPIRATIONAL QUOTES';
  quotes = [
    new Quote ('Dont worry. Be happy.','Endarasha Kimworia','Kipkirui Kigen'),
    new Quote ('Be the change you want to see.','Endarasha Kimworia','Oliver Mswazi'),
    new Quote ('Be good for good.','Anthony Muiruri','Creator Me')
  ]

  addNewQuote(quote: Quote) {
    this.quotes.push(quote)
  }

  upvote(i: number) {
    this.quotes[i].upvotes ++;
  }	
  downvote(i:number) {	    
    this.quotes[i].downvotes ++;
  }	
  deleteQuote(i:number){
    this.quotes.splice(i,1)
  }

  constructor() { }

  ngOnInit() {
  }

}
