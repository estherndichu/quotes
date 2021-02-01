import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  title = 'INSPIRATIONAL QUOTES';
  quote : Quote [] = [
    {saying : 'Dont worry. Be happy.' , author:'Endarasha Kimworia', name:'Kipkirui Kigen'},
    {saying : 'Be the change you want to see.' , author:'Endarasha Kimworia',name:'Oliver Mswazi'},
    {saying:'Be good for good.' , author:'Anthony Muiruri',name:'Creator Me'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
