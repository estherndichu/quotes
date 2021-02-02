import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  @Output () addQuote = new EventEmitter
  publisher!: string; 
  writer!: string; 
  theQuote!: string;
  theWords : any

  submitQuote () {
    this.theWords = new Quote(this.publisher,this.writer,this.theQuote)
    this.addQuote.emit(this.theWords);
  }
  constructor() { }

  ngOnInit(){

  }
}
