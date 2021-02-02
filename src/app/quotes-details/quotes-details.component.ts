import { Component, Input, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  constructor() { }
  @Input()
  quote!: Quote;
  upvotes = 0;
  downvotes = 0;

  ngOnInit(): void {
  }

}
